create table if not exists public.site_content (
  id smallint primary key default 1 check (id = 1),
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
create policy "Public can read site content" on public.site_content for select using (true);
create policy "Admins manage site content" on public.site_content for all using (public.is_admin()) with check (public.is_admin());
