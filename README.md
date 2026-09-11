# 🚀 Portofolio Developer Modern (React.js + Vite)

Website portofolio profesional dan modern yang dibangun menggunakan **React.js** dan **Vite**. Dirancang khusus dengan estetika premium (*dark/light mode*, efek *glassmorphism*, ambient glow orbs, serta transisi mikro-animasi) dan arsitektur modular yang memudahkan kustomisasi data tanpa perlu merombak komponen UI.

---

## ✨ Fitur Unggulan

- **🌗 Dark & Light Theme**: Mendukung pergantian tema gelap dan terang secara instan dengan penyimpanan preferensi di `localStorage`.
- **💎 Estetika Glassmorphism & Modern UI**: Tampilan visual elegan dengan efek *translucent glass*, border halus, tipografi Google Fonts (*Outfit* & *Plus Jakarta Sans*), serta ambient background glow orbs.
- **📱 100% Responsif & Mobile-Friendly**: Tampilan optimal di semua ukuran layar mulai dari ponsel (smartphone), tablet, hingga monitor desktop beresolusi tinggi.
- **⚙️ Sentralisasi Data (`portfolioData.js`)**: Seluruh konten (nama, bio, kontak, keahlian, proyek, riwayat kerja) tersimpan di satu file data terpusat sehingga mudah disesuaikan.
- **🔍 Filter Proyek & Pop-up Modal Interaktif**: Pengunjung dapat memfilter portofolio berdasarkan kategori (*Fullstack*, *Web App*, *UI/UX*, *Mobile*) dan membuka modal detail proyek lengkap beserta checklist fitur dan link demo.
- **⏳ Linimasa Karir & Edukasi**: Tampilan timeline interaktif yang rapi untuk memamerkan riwayat kerja dan pencapaian akademik/sertifikasi.
- **✉️ Formulir Kontak Interaktif**: Dilengkapi validasi input, status loading pengiriman, serta kartu umpan balik sukses interaktif.
- **⚡ Performa Maksimal**: Skor Core Web Vitals tinggi berkat Vite bundler dan minimnya dependensi eksternal yang tidak perlu.

---

## 📁 Struktur Folder Proyek

Struktur folder dirancang terorganisir sesuai standar *Clean Architecture* frontend:

```text
portofolio/
├── public/
│   └── favicon.svg                  # Favicon SVG modern untuk browser tab
├── src/
│   ├── assets/                      # Aset statis tambahan (gambar, vektor, ikon)
│   ├── components/                  # Komponen antarmuka (UI Components)
│   │   ├── icons/
│   │   │   └── SocialIcons.jsx      # Vektor SVG mandiri (GitHub, LinkedIn, Twitter/X, Instagram)
│   │   ├── Navbar.jsx               # Navigasi sticky glassmorphism & drawer navigasi mobile
│   │   ├── Hero.jsx                 # Bagian perkenalan utama, badge ketersediaan, & statistik
│   │   ├── About.jsx                # Profil pribadi, foto profil, dan highlight nilai tambah
│   │   ├── Skills.jsx               # Kartu keahlian dengan level bar & tab kategori
│   │   ├── Projects.jsx             # Galeri portofolio dengan filter kategori
│   │   ├── ProjectModal.jsx         # Modal pop-up detail proyek interaktif
│   │   ├── Experience.jsx           # Linimasa riwayat pekerjaan dan edukasi
│   │   ├── Contact.jsx              # Formulir kontak interaktif & info kontak langsung
│   │   ├── Footer.jsx               # Bagian bawah situs, navigasi cepat, & tombol kembali ke atas
│   │   └── ThemeToggle.jsx          # Tombol pengalih tema (Sun / Moon)
│   ├── data/
│   │   └── portfolioData.js         # ⭐️ PUSAT DATA: Tempat mengubah semua teks, foto, & proyek
│   ├── hooks/                       # Custom React Hooks
│   │   ├── useTheme.js              # Hook pengelolaan tema gelap/terang & sinkronisasi local storage
│   │   └── useScrollSpy.js          # Hook pendeteksi posisi scroll untuk highlight link aktif
│   ├── styles/                      # Sistem styling CSS murni (Vanilla CSS)
│   │   ├── index.css                # Design tokens, variabel CSS warna, reset, & styling komponen
│   │   └── animations.css           # Animasi orb melayang, pulse dot, dan transisi modal
│   ├── App.jsx                      # Komponen utama yang menyusun seluruh layout
│   └── main.jsx                     # Titik masuk React (React DOM entry point)
├── index.html                       # Semantic HTML5 dengan Google Fonts & meta tag SEO
├── package.json                     # Daftar dependensi dan script npm
├── vite.config.js                   # Konfigurasi bundler Vite
└── README.md                        # Panduan dokumentasi proyek
```

---

## 🛠️ Panduan Instalasi & Menjalankan

### 1. Prasyarat
Pastikan komputer Anda telah terpasang:
- **Node.js** (versi 18 ke atas)
- **npm** atau **pnpm** / **yarn**

### 2. Buka Direktori Proyek
Buka terminal atau PowerShell di folder proyek ini:
```bash
cd c:\portofolio
```

### 3. Pasang Dependensi
Jalankan perintah berikut untuk mengunduh semua paket yang dibutuhkan:
```bash
npm install
```

### 4. Jalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Setelah dijalankan, buka browser dan akses URL lokal:
👉 `http://localhost:5173/`

### 5. Buat Build untuk Produksi
Jika Anda siap meluncurkan website ke internet:
```bash
npm run build
```
File siap rilis akan digenerate ke dalam folder `dist/`. Anda dapat mempratinjau hasil build secara lokal dengan:
```bash
npm run preview
```

---

## 🎨 Cara Kustomisasi Data Portofolio

Anda **tidak perlu** mengedit file komponen satu per satu. Cukup buka file:
👉 [`src/data/portfolioData.js`](file:///c:/portofolio/src/data/portfolioData.js)

### 1. Mengubah Data Profil Pribadi
Cari objek `personal`:
```javascript
personal: {
  name: "Nama Lengkap Anda",
  nickname: "Nama Panggilan",
  title: "Fullstack Web & Frontend Engineer",
  tagline: "Kalimat perkenalan singkat yang menarik perhatian...",
  bio: "Cerita singkat tentang perjalanan dan spesialisasi Anda...",
  location: "Jakarta, Indonesia",
  email: "emailanda@example.com",
  phone: "+62 812-xxxx-xxxx",
  availability: "Tersedia untuk Freelance & Full-time",
  avatar: "URL_FOTO_ANDA_DISINI",
  resumeUrl: "#", // Masukkan link Google Drive atau link file PDF CV Anda
}
```

### 2. Menambah atau Mengubah Proyek
Cari array `projects`. Tambahkan atau modifikasi item proyek:
```javascript
{
  id: "nama-proyek-unik",
  title: "Judul Proyek Keren",
  category: "Web App", // Pilihan: 'Fullstack', 'Web App', 'UI/UX', 'Mobile'
  description: "Penjelasan ringkas proyek...",
  fullDescription: "Penjelasan lengkap yang akan muncul di pop-up modal...",
  tags: ["React.js", "Tailwind CSS", "REST API"],
  image: "https://images.unsplash.com/...", // URL gambar screenshot proyek
  liveUrl: "https://demo-proyek-anda.com",
  githubUrl: "https://github.com/username/repo",
  features: [
    "Fitur unggulan 1",
    "Fitur unggulan 2",
    "Fitur unggulan 3"
  ]
}
```

### 3. Mengubah Keahlian (Skills)
Cari array `skills` dan atur persentase `level` (0 - 100) serta `tag`:
```javascript
{ name: "React.js", level: 95, tag: "Expert" }
```

### 4. Mengubah Akun Media Sosial
Cari objek `socials`:
```javascript
socials: {
  github: "https://github.com/username_anda",
  linkedin: "https://linkedin.com/in/username_anda",
  twitter: "https://twitter.com/username_anda",
  instagram: "https://instagram.com/username_anda",
  email: "mailto:emailanda@example.com",
}
```

---

## 🚀 Panduan Deployment Gratis

Portofolio ini merupakan aplikasi Single Page Application (SPA) statis yang sangat cepat dan dapat di-hosting secara gratis di berbagai platform:

### A. Deploy ke Vercel (Paling Direkomendasikan)
1. Unggah kode proyek Anda ke akun [GitHub](https://github.com).
2. Kunjungi [vercel.com](https://vercel.com) dan hubungkan akun GitHub Anda.
3. Klik **"Add New Project"** dan pilih repositori portofolio Anda.
4. Vercel akan otomatis mendeteksi framework Vite. Klik **"Deploy"**.
5. Selesai! Website portofolio Anda langsung online dalam hitungan detik.

### B. Deploy ke Netlify
1. Kunjungi [netlify.com](https://netlify.com).
2. Pilih **"Add new site"** > **"Import an existing project"** dari GitHub.
3. Atur *Build command*: `npm run build` dan *Publish directory*: `dist`.
4. Klik **"Deploy site"**.

---

## 💻 Tech Stack yang Digunakan

- **Core**: [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Styling**: Vanilla CSS dengan Modern CSS Variables & Glassmorphism Design Tokens
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 📄 Lisensi

Proyek ini terbuka di bawah lisensi [MIT](LICENSE). Bebas digunakan, dimodifikasi, dan disesuaikan untuk portofolio pribadi Anda.
