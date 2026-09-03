alter table public.departures add column if not exists departure_date date;

insert into public.packages (slug, tier, duration, title, hotel_mecca, hotel_madinah, flight_type, landing, price_from, poster_url, featured, sort_order)
values
  ('9-des-eko', 'Reguler', '12 Hari', 'Umroh 12 Hari', 'Royal Majestic ★4', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 36900000, '/images/paket/9-desember-ekonomi.png', true, 1),
  ('9-des-eks', 'Luxury', '12 Hari', 'Umroh 12 Hari', 'Pullman Zamzam ★5', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 44900000, null, false, 2),
  ('7-des-eko', 'Reguler', '9 Hari', 'Umroh 9 Hari', 'Royal Majestic ★4', 'Ansr Golden Tulip ★4 atau setaraf', 'Garuda Indonesia', 'Jeddah', 36900000, '/images/paket/7-desember-ekonomi.png', false, 3),
  ('7-des-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5', 'Ansr Golden Tulip ★4 atau setaraf', 'Garuda Indonesia', 'Jeddah', 42900000, '/images/paket/7-desember-eksklusif.png', false, 4),
  ('12-des-eko', 'Reguler', '9 Hari', 'Umroh 9 Hari', 'Royal Majestic ★4', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 36900000, '/images/paket/12-desember-ekonomi.png', false, 5),
  ('12-des-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 39900000, '/images/paket/12-desember-eksklusif.png', false, 6),
  ('15-des-eko', 'Reguler', '9 Hari', 'Umroh 9 Hari', 'Royal Majestic ★4', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 36900000, '/images/paket/15-desember-ekonomi.png', false, 7),
  ('15-des-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 41900000, '/images/paket/15-desember-eksklusif.png', false, 8),
  ('19-des-eko', 'Reguler', '9 Hari', 'Umroh 9 Hari', 'Royal Majestic ★4', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 37900000, '/images/paket/19-desember-ekonomi.png', false, 9),
  ('19-des-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 45900000, '/images/paket/19-desember-eksklusif.png', false, 10),
  ('7-des-eks-12', 'Luxury', '12 Hari', 'Umroh 12 Hari', 'Pullman Zamzam ★5 atau setaraf', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 44900000, '/images/paket/7-desember-eksklusif-12-hari.png', false, 11),
  ('2-nov-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5 atau setaraf', 'Ansr Golden Tulip ★4 atau setaraf', 'Garuda Indonesia', 'Jeddah', 42900000, '/images/paket/2-november-eksklusif.png', false, 12),
  ('12-nov-eks-35', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'AS Suhadda Hotel', 'Detail hotel dikonfirmasi admin', 'Maskapai dikonfirmasi admin', 'Jeddah', 35000000, '/images/paket/12-november-eksklusif-35.png', false, 13),
  ('12-nov-eks', 'Luxury', '9 Hari', 'Umroh 9 Hari', 'Pullman Zamzam ★5 atau setaraf', 'Ansr Golden Tulip ★4 atau setaraf', 'Qatar Airways', 'Jeddah', 38900000, '/images/paket/12-november-eksklusif.png', false, 14),
  ('6-okt-eks', 'Luxury', '10 Hari', 'Umroh 10 Hari', 'Pullman Zamzam ★5', 'Detail hotel dikonfirmasi admin', 'Garuda Indonesia', 'Jeddah', 39900000, '/images/paket/6-oktober-eksklusif.png', false, 15),
  ('18-okt-eks', 'Luxury', '10 Hari', 'Umroh 10 Hari', 'Pullman Zamzam ★5', 'Detail hotel dikonfirmasi admin', 'Garuda Indonesia', 'Jeddah', 40900000, '/images/paket/18-oktober-eksklusif.png', false, 16),
  ('23-sep-eks', 'Luxury', '12 Hari', 'Umroh 12 Hari', 'Pullman Zamzam ★5 atau setaraf', 'Ansr Golden Tulip ★4 atau setaraf', 'Saudi Arabian Airlines', 'Jeddah', 38900000, '/images/paket/23-september-eksklusif.png', false, 17)
on conflict (slug) do nothing;

insert into public.departures (package_id, date_label, departure_date, quota_label, sort_order)
select packages.id, programs.date_label, programs.departure_date, 'Hubungi admin untuk sisa seat', 1
from (values
  ('9-des-eko', '9 Desember 2026', date '2026-12-09'),
  ('9-des-eks', '9 Desember 2026', date '2026-12-09'),
  ('7-des-eko', '7 Desember 2026', date '2026-12-07'),
  ('7-des-eks', '7 Desember 2026', date '2026-12-07'),
  ('12-des-eko', '12 Desember 2026', date '2026-12-12'),
  ('12-des-eks', '12 Desember 2026', date '2026-12-12'),
  ('15-des-eko', '15 Desember 2026', date '2026-12-15'),
  ('15-des-eks', '15 Desember 2026', date '2026-12-15'),
  ('19-des-eko', '19 Desember 2026', date '2026-12-19'),
  ('19-des-eks', '19 Desember 2026', date '2026-12-19'),
  ('7-des-eks-12', '7 Desember 2026', date '2026-12-07'),
  ('2-nov-eks', '2 November 2026', date '2026-11-02'),
  ('12-nov-eks-35', '12 November 2026', date '2026-11-12'),
  ('12-nov-eks', '12 November 2026', date '2026-11-12'),
  ('6-okt-eks', '6 Oktober 2026', date '2026-10-06'),
  ('18-okt-eks', '18 Oktober 2026', date '2026-10-18'),
  ('23-sep-eks', '23 September 2026', date '2026-09-23')
) as programs(slug, date_label, departure_date)
join public.packages on packages.slug = programs.slug
where not exists (select 1 from public.departures where departures.package_id = packages.id and departures.departure_date = programs.departure_date);
