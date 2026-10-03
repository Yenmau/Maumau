# Maumau — Web Katalog Film

Aplikasi web katalog film bergaya layanan streaming: menampilkan poster, judul, tanggal
rilis, rating, dan sinopsis film yang sedang tayang. Data film diambil dari API TMDB
(The Movie Database).

Dibangun dengan **React + Vite + Tailwind CSS**, dan di-deploy ke **GitHub Pages**.

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env      # Windows: copy .env.example .env
```

Buka `.env` lalu isi `VITE_APIKEY` dengan API key TMDB milikmu
(ambil di <https://www.themoviedb.org/settings/api>).

```bash
npm run dev
```

## Build & deploy

```bash
npm run build
npm run deploy
```

---

## Catatan Keamanan

**Jangan pernah meng-commit file `.env`.** File ini sudah terdaftar di `.gitignore`.
Isi `.env` hanya untuk pemakaian lokal.

**Keterbatasan yang perlu diketahui — API key terlihat di sisi browser.**
Aplikasi ini murni frontend (situs statis). Saat build, Vite menyalin semua variabel
yang berawalan `VITE_` ke dalam bundle JavaScript, dan bundle itu dikirim ke browser
setiap pengunjung. Akibatnya **API key TMDB selalu dapat dibaca oleh siapa pun yang
membuka situs**, tidak peduli seberapa bersih repositori ini.

Ini bukan salah konfigurasi, melainkan sifat dasar aplikasi frontend-only tanpa backend.
Menyembunyikan key di `.env` hanya menjaga repositori tetap rapi, bukan menyembunyikannya
dari pengguna.

Agar API key benar-benar tidak terekspos, pemanggilan API harus dilewatkan melalui
backend/proxy (misalnya Cloudflare Worker atau serverless function). Dengan pola itu,
key disimpan di sisi server dan tidak pernah dikirim ke browser.

Catatan pendukung: API key v3 TMDB bersifat **read-only**, sehingga dampak penyalahgunaan
terbatas pada pemakaian kuota oleh pihak lain.

## Struktur

```
src/
├── api.jsx                  # pemanggilan API TMDB
├── App.jsx                  # halaman utama + pencarian
└── components/              # Navbar, Card, style
```
