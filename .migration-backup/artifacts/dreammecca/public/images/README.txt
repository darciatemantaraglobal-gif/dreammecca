=========================================================
  DREAMMECCA TOUR & TRAVEL — PANDUAN ASET GAMBAR/VIDEO
=========================================================

Taruh file gambar/video Anda ke folder yang sesuai di bawah ini.
Nama file HARUS persis sama seperti yang tertulis agar otomatis terbaca
oleh website tanpa perlu mengubah kode.

Gunakan format JPG untuk foto, PNG untuk logo (transparan), MP4 untuk video.
Kompres gambar sebelum upload: target < 300KB per foto, < 15MB untuk video.
Tool gratis: Squoosh (squoosh.app) untuk foto, HandBrake untuk video.

---------------------------------------------------------
📁 hero/
---------------------------------------------------------
File yang dibutuhkan:

  hero-1.jpg
    Jenis  : Foto latar belakang Hero section (fallback saat video tidak tersedia)
    Konten : Aerial view Kaabah dari atas, atau suasana thawaf, atau Masjidil Haram
    Ukuran : 1920 × 1080 px (landscape 16:9)
    Format : JPG, kualitas 85%, target < 400KB
    Catatan: Gunakan foto yang terang dan dramatis — ini kesan pertama visitor

  og-image.jpg
    Jenis  : Gambar khusus untuk share di Facebook / Instagram / WhatsApp
    Konten : Foto Kaabah + logo Dreammecca + tagline (bisa dibuat di Canva)
    Ukuran : 1200 × 630 px (landscape)
    Format : JPG, kualitas 90%
    Catatan: PENTING untuk iklan Facebook/Instagram — tanpa ini, thumbnail share jelek

---------------------------------------------------------
📁 kaabah/
---------------------------------------------------------

  kaabah-1.jpg
    Jenis  : Foto di section "Tentang Kami" (kolom kanan)
    Konten : Interior Masjid Nabawi, atau suasana di Raudhah, atau jamaah berdoa di Madinah
    Ukuran : 800 × 1000 px (portrait 4:5)
    Format : JPG, kualitas 85%, target < 250KB
    Catatan: Foto portrait (lebih tinggi dari lebar) agar pas di layout 2 kolom

  kaabah-2.jpg   (opsional, untuk gallery atau section lain di masa depan)
    Ukuran : 1200 × 800 px (landscape 3:2)

---------------------------------------------------------
📁 testimoni/
---------------------------------------------------------

  testimoni-1.jpg   → Foto Bapak Ahmad Fauzi (Jakarta Selatan)
  testimoni-2.jpg   → Foto Ibu Siti Rahayu (Surabaya)
  testimoni-3.jpg   → Foto Bapak Hendra Wijaya (Bandung)     [opsional]
  testimoni-4.jpg   → Foto Ibu Fatimah Zahra (Medan)         [opsional]
  testimoni-5.jpg   → Foto Bapak Rizki Pratama (Makassar)    [opsional]
  testimoni-6.jpg   → Foto Ibu Nuraini (Semarang)            [opsional]

    Jenis  : Foto wajah jamaah (dengan izin tertulis mereka)
    Ukuran : 400 × 400 px (square 1:1)
    Format : JPG, kualitas 80%, target < 80KB per foto
    Catatan: Kalau tidak ada foto asli, inisial nama ditampilkan otomatis
             sebagai fallback (sudah diimplementasi di kode)

---------------------------------------------------------
📁 paket/
---------------------------------------------------------

  paket-reguler-ramadan.jpg    → Paket Reguler Ramadan
  paket-premium-ramadan.jpg    → Paket Premium Ramadan Plus
  paket-ekonomi-syawal.jpg     → Paket Ekonomi Syawal
  paket-reguler-syawal.jpg     → Paket Reguler Syawal
  paket-vip-dzulhijjah.jpg     → Paket VIP Dzulhijjah
  paket-madinah-extended.jpg   → Paket Plus Madinah Extended

    Jenis  : Foto header tiap kartu paket (hotel, Kaabah, atau maskapai)
    Ukuran : 800 × 450 px (landscape 16:9)
    Format : JPG, kualitas 80%, target < 200KB per foto
    Catatan: File-file ini OPSIONAL — kartu paket saat ini menampilkan
             gradient + ikon bulan. Minta developer untuk menambahkan
             <img> di PackageCard jika ingin foto aktif.

---------------------------------------------------------
📁 fasilitas/   [OPSIONAL — saat ini menggunakan ikon]
---------------------------------------------------------

  Saat ini section Fasilitas menggunakan ikon (tidak perlu foto).
  Jika di masa depan ingin menambahkan foto fasilitas, gunakan:

  fasilitas-hotel.jpg        Ukuran: 600 × 400 px
  fasilitas-pesawat.jpg      Ukuran: 600 × 400 px
  fasilitas-bus.jpg          Ukuran: 600 × 400 px
  fasilitas-manasik.jpg      Ukuran: 600 × 400 px

---------------------------------------------------------
📁 perlengkapan/   [OPSIONAL — saat ini menggunakan ikon]
---------------------------------------------------------

  Saat ini section Perlengkapan menggunakan ikon (tidak perlu foto).
  Jika ingin menampilkan foto produk nyata:

  perlengkapan-koper.jpg     Ukuran: 400 × 400 px (square)
  perlengkapan-ihram.jpg     Ukuran: 400 × 400 px (square)
  perlengkapan-tas.jpg       Ukuran: 400 × 400 px (square)
  perlengkapan-buku.jpg      Ukuran: 400 × 400 px (square)
  perlengkapan-sajadah.jpg   Ukuran: 400 × 400 px (square)

---------------------------------------------------------
📁 partner-logos/   [OPSIONAL — saat ini menggunakan teks]
---------------------------------------------------------

  Saat ini partner strip menampilkan nama teks. Jika ingin logo:

  logo-kemenag.png           Ukuran: 200 × 80 px, latar transparan
  logo-saudia.png            Ukuran: 200 × 80 px, latar transparan
  logo-garuda.png            Ukuran: 200 × 80 px, latar transparan
  logo-hilton.png            Ukuran: 200 × 80 px, latar transparan
  logo-bri-syariah.png       Ukuran: 200 × 80 px, latar transparan

---------------------------------------------------------
📁 ../videos/   (folder: public/videos/)
---------------------------------------------------------

  hero-1.mp4
    Jenis  : Video latar belakang Hero section (autoplay, muted, loop)
    Konten : Aerial Kaabah/thawaf/Masjidil Haram di malam hari atau sore hari
    Ukuran : 1920 × 1080 px (landscape 16:9)
    Format : MP4, H.264 codec, bitrate 2-4 Mbps, target < 15MB
    Durasi : 15-30 detik (loop seamless)
    Catatan: Video ini OPSIONAL — kalau tidak ada, foto hero-1.jpg tampil otomatis
             Sumber video gratis: Pexels.com (cari "kaaba aerial" atau "mecca")
             Simpan di: public/videos/hero-1.mp4

=========================================================
  RINGKASAN PRIORITAS UPLOAD
=========================================================

WAJIB (halaman rusak tanpa ini):
  ✅ Sudah ada — hero/hero-1.jpg, kaabah/kaabah-1.jpg,
                 testimoni/testimoni-1.jpg, testimoni/testimoni-2.jpg

SANGAT DISARANKAN (untuk iklan & share sosmed):
  ⭐ hero/og-image.jpg   (1200×630 — untuk Facebook/Instagram/WhatsApp share)
  ⭐ videos/hero-1.mp4   (hero video background)

OPSIONAL (meningkatkan kualitas tampilan):
  📷 testimoni/testimoni-3.jpg sampai testimoni-6.jpg
  📷 paket/paket-*.jpg (6 foto paket)
  📷 partner-logos/logo-*.png

=========================================================
  TOOL REKOMENDASI
=========================================================

Kompres foto     : https://squoosh.app
Resize foto      : https://imageresizer.com
Kompres video    : HandBrake (gratis, desktop)
Buat OG image    : https://canva.com (template "Facebook Ad 1200×628")
Cek meta OG      : https://developers.facebook.com/tools/debug/

=========================================================
