# 🚗 Honda Vehicle Explorer

**Honda Vehicle Explorer** adalah aplikasi web eksplorasi data kendaraan yang menampilkan berbagai model mobil dari brand Honda. Dibangun menggunakan React.js, Tailwind CSS, dan mengintegrasikan API dari NHTSA. Aplikasi ini menawarkan pengalaman pengguna yang interaktif, animatif, dan responsif di berbagai perangkat.

---

## Deskripsi Proyek

Aplikasi ini merupakan bagian dari Proyek UAS pada mata kuliah *Kerangka Kerja Pengembangan Antarmuka Website*. Aplikasi memungkinkan pengguna mencari dan melihat data kendaraan Honda serta menyimpan kendaraan favorit.

---

## API yang Digunakan

Data kendaraan diambil dari API publik:

> https://vpic.nhtsa.dot.gov/api/

---

## Fitur-Fitur Utama

- Pencarian kendaraan berdasarkan merek dan model
- Tambahkan kendaraan ke daftar favorit (Redux + localStorage)
- Autentikasi pengguna (Login & Register)
- Detail kendaraan secara lengkap
- Responsif untuk mobile & desktop
- Animasi transisi (Framer Motion & AOS)
- Loading animasi saat gambar dimuat
- PrivateRoute untuk melindungi akses user

---

## Struktur Halaman dan Routing

| Path | Halaman | Keterangan |
|------|---------|------------|
| `/` | Beranda | Halaman utama |
| `/search` | Pencarian | Protected (login) |
| `/favorites` | Favorit | Protected (login) |
| `/updateUser` | Edit Profil | Protected (login) |
| `/detail/:modelId` | Detail Kendaraan | Protected (login) |
| `/login` | Login |
| `/register` | Registrasi |

Routing menggunakan **React Router v6** dengan `PrivateRoute` untuk proteksi.

---

## Cara Menjalankan Secara Lokal

1. **Clone repository**

```bash
git clone https://github.com/username/honda-explorer.git
cd honda-explorer
```

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan aplikasi**

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`.

---

## Live Demo

Video demo:  
[![Demo Video](https://img.youtube.com/vi/oZoav_bdWd0/0.jpg)](https://youtu.be/oZoav_bdWd0)

---

## Tech Stack

- **React.js** – Library frontend utama
- **Tailwind CSS** – Styling cepat dan responsif
- **Redux Toolkit** – Manajemen state global (auth, favorite)
- **React Router DOM** – Routing SPA
- **Framer Motion & AOS** – Animasi transisi halaman dan elemen
- **localStorage** – Menyimpan data user/favorit lokal

---

