create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  tier text not null check (tier in ('Reguler', 'Luxury')),
  duration text not null,
  title text not null,
  hotel_mecca text not null default '',
  hotel_madinah text not null default '',
  flight_type text not null default 'Direct',
  landing text not null default 'Jeddah',
  tags text[] not null default '{}',
  price_from bigint not null check (price_from >= 0),
  poster_url text,
  featured boolean not null default false,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.departures (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.packages(id) on delete cascade,
  date_label text not null,
  quota_label text not null default '',
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  meta text not null,
  quote text not null,
  rating smallint not null default 5 check (rating between 1 and 5),
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_photos (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id smallint primary key default 1 check (id = 1),
  whatsapp_number text not null default '',
  address text not null default '',
  instagram_url text not null default '',
  facebook_url text not null default '',
  youtube_url text not null default '',
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id) values (1) on conflict (id) do nothing;

create index if not exists packages_active_sort_idx on public.packages (is_active, sort_order);
create index if not exists departures_package_sort_idx on public.departures (package_id, is_active, sort_order);
create index if not exists testimonials_active_sort_idx on public.testimonials (is_active, sort_order);
create index if not exists gallery_photos_active_sort_idx on public.gallery_photos (is_active, sort_order);

alter table public.admin_users enable row level security;
alter table public.packages enable row level security;
alter table public.departures enable row level security;
alter table public.testimonials enable row level security;
alter table public.gallery_photos enable row level security;
alter table public.site_settings enable row level security;

create policy "Public can read active packages" on public.packages for select using (is_active);
create policy "Public can read active departures" on public.departures for select using (
  is_active and exists (select 1 from public.packages where packages.id = departures.package_id and packages.is_active)
);
create policy "Public can read active testimonials" on public.testimonials for select using (is_active);
create policy "Public can read active gallery photos" on public.gallery_photos for select using (is_active);
create policy "Public can read site settings" on public.site_settings for select using (true);

create policy "Admins manage packages" on public.packages for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins manage departures" on public.departures for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins manage testimonials" on public.testimonials for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins manage gallery photos" on public.gallery_photos for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins manage site settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('posters', 'posters', true, 10485760, array['image/jpeg', 'image/png', 'image/webp']),
  ('gallery', 'gallery', true, 10485760, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

create policy "Public can read posters" on storage.objects for select using (bucket_id = 'posters');
create policy "Public can read gallery images" on storage.objects for select using (bucket_id = 'gallery');
create policy "Admins manage posters" on storage.objects for all using (bucket_id = 'posters' and public.is_admin()) with check (bucket_id = 'posters' and public.is_admin());
create policy "Admins manage gallery images" on storage.objects for all using (bucket_id = 'gallery' and public.is_admin()) with check (bucket_id = 'gallery' and public.is_admin());
