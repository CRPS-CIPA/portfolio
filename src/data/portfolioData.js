/**
 * Portfolio Data Source
 * Anda dapat dengan mudah mengedit seluruh data portofolio di file ini
 * tanpa perlu mengubah kode komponen satu per satu.
 */

import avatarImg from '../assets/foto.png';

export const portfolioData = {
  // Informasi Pribadi
  personal: {
    name: "Hisyam ",
    nickname: "Syam",
    title: "Fullstack Web & Frontend Engineer",
    tagline: "Membangun antarmuka web modern berkinerja tinggi dengan pengalaman pengguna yang imersif.",
    bio: "Saya adalah seorang Software Engineer yang berfokus pada ekosistem modern web development (React.js, Node.js, Next.js). Berpengalaman lebih dari 3 tahun dalam merancang solusi digital mulai dari landing page interaktif hingga aplikasi web berskala enterprise yang cepat, aman, dan responsif.",
    location: "Aceh, Indonesia",
    email: "shanizahisyam@gmail.com",
    phone: "+62 82361983907",
    availability: "Tersedia untuk Freelance & Full-time",
    avatar: avatarImg,
    resumeUrl: "#",
  },

  // Statistik Singkat
  stats: [
    { label: "Tahun Pengalaman", value: "1+", suffix: "Tahun" },
    { label: "Proyek Selesai", value: "2+", suffix: "Proyek" },
    { label: "Klien Puas", value: "1+", suffix: "Klien" },
    { label: "Code Commits", value: "0", suffix: "GitHub" },
  ],

  // Tautan Media Sosial
  socials: {
    github: "https://github.com/CRPS-CIPA",
    linkedin: "https://www.linkedin.com/in/shaniza-hisyam-s-kom-8b65723ab/",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/shanizahisyam/",
    email: "shanizahisyam@gmail.com",
  },

  // Highlight Nilai Tambah di Bagian About
  aboutHighlights: [
    {
      title: "Clean & Scalable Code",
      description: "Menulis kode yang mudah dirawat, modular, dan mengikuti prinsip clean architecture.",
      iconName: "Code2",
    },
    {
      title: "Modern UI/UX Mindset",
      description: "Fokus pada estetika visual, transisi halus, dan aksesibilitas untuk semua pengguna.",
      iconName: "Palette",
    },
    {
      title: "High Performance First",
      description: "Optimasi Core Web Vitals, lazy loading, dan bundle size efisien untuk loading instan.",
      iconName: "Zap",
    },
    {
      title: "Collaborative & Agile",
      description: "Terbiasa bekerja dalam tim sprint, code review ketat, dan integrasi CI/CD berulang.",
      iconName: "Users",
    },
  ],

  // Keahlian & Teknologi
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95, tag: "Expert" },
        { name: "JavaScript (ES6+)", level: 92, tag: "Expert" },
        { name: "TypeScript", level: 85, tag: "Advanced" },
        { name: "Next.js", level: 88, tag: "Advanced" },
        { name: "HTML5 & CSS3 / Vanilla", level: 95, tag: "Expert" },
        { name: "Tailwind CSS", level: 90, tag: "Advanced" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js & Express", level: 85, tag: "Advanced" },
        { name: "RESTful API Design", level: 90, tag: "Advanced" },
        { name: "PostgreSQL", level: 80, tag: "Proficient" },
        { name: "MongoDB", level: 82, tag: "Proficient" },
        { name: "Firebase / Supabase", level: 85, tag: "Advanced" },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", level: 92, tag: "Expert" },
        { name: "Vite & Webpack", level: 88, tag: "Advanced" },
        { name: "Docker Basics", level: 75, tag: "Intermediate" },
        { name: "Postman & API Testing", level: 88, tag: "Advanced" },
        { name: "Vercel & Netlify Deployment", level: 90, tag: "Expert" },
      ],
    },
    {
      category: "Design & Workflow",
      items: [
        { name: "Figma to Code", level: 90, tag: "Expert" },
        { name: "Responsive Design", level: 96, tag: "Expert" },
        { name: "Agile & Scrum", level: 85, tag: "Advanced" },
        { name: "Web Accessibility (a11y)", level: 82, tag: "Proficient" },
      ],
    },
  ],

  // Daftar Proyek Unggulan
  projects: [
    // {
    //   id: "saas-analytics-dashboard",
    //   title: "SaaS Analytics & Metrics Dashboard",
    //   category: "Fullstack",
    //   description: "Platform analitik bisnis real-time dengan visualisasi grafik interaktif, pemantauan churn rate, dan ekspor laporan PDF.",
    //   fullDescription: "Aplikasi dashboard enterprise yang dirancang untuk memantau performa bisnis SaaS. Dilengkapi dengan live data feed, filter tanggal kustom, manajemen tim bertingkat (RBAC), serta integrasi pembayaran Stripe untuk billing otomatis.",
    //   tags: ["React.js", "Node.js", "Tailwind CSS", "Recharts", "PostgreSQL"],
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-analytics",
    //   githubUrl: "https://github.com/example/saas-dashboard",
    //   features: [
    //     "Grafik dinamis real-time (Revenue, CAC, LTV)",
    //     "Manajemen multi-user dengan hak akses berbeda",
    //     "Mode Gelap / Terang terintegrasi",
    //     "Ekspor laporan instan dalam format CSV dan PDF",
    //   ],
    // },
    // {
    //   id: "ecommerce-fashion-store",
    //   title: "Modern E-Commerce Storefront",
    //   category: "Web App",
    //   description: "Toko online modern dengan filter produk dinamis, pencarian cepat, keranjang belanja interaktif, dan checkout aman.",
    //   fullDescription: "Solusi e-commerce headless yang memprioritaskan kecepatan muat di bawah 1 detik. Dibangun dengan arsitektur modular, caching pintar, dan animasi transisi halaman yang memanjakan mata pembeli.",
    //   tags: ["React.js", "Vite", "Zustand", "Vanilla CSS", "Stripe API"],
    //   image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-ecommerce",
    //   githubUrl: "https://github.com/example/modern-ecommerce",
    //   features: [
    //     "Sistem filter kategori, rentang harga, dan ukuran",
    //     "Penyimpanan keranjang belanja persisten di local storage",
    //     "Animasi mikro saat menambahkan barang ke keranjang",
    //     "Optimasi gambar dengan resolusi adaptif",
    //   ],
    // },
    // {
    //   id: "ai-content-generator",
    //   title: "AI Writing Assistant Web App",
    //   category: "Web App",
    //   description: "Aplikasi produktivitas berbasis AI untuk menghasilkan artikel SEO, copy iklan, dan postingan media sosial otomatis.",
    //   fullDescription: "Aplikasi AI inovatif yang mengintegrasikan model bahasa pintar untuk membantu pembuat konten. Menyediakan berbagai template siap pakai, editor markdown langsung, dan riwayat generasi dokumen.",
    //   tags: ["React.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    //   image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-ai-writer",
    //   githubUrl: "https://github.com/example/ai-writer",
    //   features: [
    //     "30+ template penulisan konten siap pakai",
    //     "Streaming response teks kata-per-kata secara real-time",
    //     "Editor teks kaya dengan ekspor markdown",
    //     "Koleksi bookmark dan riwayat pembuatan dokumen",
    //   ],
    // },
    // {
    //   id: "crypto-wallet-ui",
    //   title: "DeFi Crypto Tracker & Portfolio",
    //   category: "UI/UX",
    //   description: "Antarmuka pemantau aset kripto dengan dark mode eksklusif, grafik candlestick live, dan simulasi swap token.",
    //   fullDescription: "Konsep antarmuka Web3 modern yang memadukan estetika glassmorphism dengan tipografi futuristik. Terhubung ke API bursa pasar publik untuk menampilkan kurs real-time ribuan koin.",
    //   tags: ["React.js", "Glassmorphism", "CoinGecko API", "CSS Grid"],
    //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-crypto",
    //   githubUrl: "https://github.com/example/crypto-ui",
    //   features: [
    //     "Pembaruan harga aset kripto tiap 10 detik",
    //     "Kalkulator konversi mata uang fiat dan kripto",
    //     "Visualisasi alokasi portofolio donat interaktif",
    //     "Efek glow neon modern",
    //   ],
    // },
    // {
    //   id: "task-management-kanban",
    //   title: "Agile Task & Project Management",
    //   category: "Fullstack",
    //   description: "Aplikasi manajemen tugas tim dengan papan Kanban drag-and-drop, label prioritas, dan deadline alert.",
    //   fullDescription: "Aplikasi kolaborasi tim kerja harian yang terinspirasi dari Trello dan Linear. Mendukung pembuatan banyak ruang kerja (workspace), assign anggota tim, dan checklist tugas bertingkat.",
    //   tags: ["React.js", "Node.js", "Socket.io", "PostgreSQL", "CSS Modules"],
    //   image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-taskmaster",
    //   githubUrl: "https://github.com/example/task-kanban",
    //   features: [
    //     "Drag and drop interaktif pada kolom papan kanban",
    //     "Notifikasi deadline dan pengingat via email",
    //     "Pencarian cepat dengan shortcut keyboard (Cmd/Ctrl + K)",
    //     "Dukungan mode offline dasar",
    //   ],
    // },
    // {
    //   id: "travel-booking-mobile-web",
    //   title: "Wanderlust Travel Itinerary & Booking",
    //   category: "Mobile",
    //   description: "Aplikasi web ramah mobile untuk menjelajahi destinasi wisata tersembunyi dan memesan paket petualangan lokal.",
    //   fullDescription: "PWA (Progressive Web App) perjalanan wisata yang menawarkan pengalaman aplikasi native di browser ponsel. Pengguna dapat merencanakan itinerary harian dan melihat peta interaktif rute perjalanan.",
    //   tags: ["React.js", "PWA", "Leaflet Maps", "Vanilla CSS"],
    //   image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    //   liveUrl: "https://example.com/demo-travel",
    //   githubUrl: "https://github.com/example/travel-pwa",
    //   features: [
    //     "Peta interaktif titik wisata terdekat",
    //     "Rekomendasi berbasis ulasan komunitas",
    //     "Penyimpanan rencana perjalanan offline",
    //     "Desain antarmuka mobile-first 100% responsif",
    //   ],
    // },
  ],

  // Pengalaman Kerja
  experiences: [
    // {
    //   role: "Senior Frontend Engineer",
    //   company: "TechNova Solusindo",
    //   period: "2023 - Sekarang",
    //   description: "Memimpin perancangan frontend arsitektur web aplikasi enterprise berbasis React dan Next.js. Meningkatkan kecepatan loading halaman hingga 45% dan menurunkan bundle size melalui code splitting cerdas.",
    //   technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Jest"],
    // },
    // {
    //   role: "Frontend Web Developer",
    //   company: "Creative Digital Studio",
    //   period: "2021 - 2023",
    //   description: "Membangun lebih dari 15 website interaktif dan dashboard klien dengan fokus pada animasi mikro, kompatibilitas lintas browser, dan integrasi REST API yang kokoh.",
    //   technologies: ["React.js", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"],
    // },
    // {
    //   role: "Junior Web Developer",
    //   company: "Inovasi Pratama Media",
    //   period: "2020 - 2021",
    //   description: "Mengembangkan komponen antarmuka web, melakukan bug fixing, memelihara performa website, dan berkolaborasi erat dengan tim UI/UX Designer.",
    //   technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
    // },
  ],

  // Pendidikan & Sertifikasi
  education: [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Teuku Umar",
      period: "2021 - 2026",
      description: "Lulus dengan predikat Cum Laude. Fokus riset pada Rekayasa Perangkat Lunak",
    },
    // {
    //   degree: "Professional Fullstack Web Developer Certification",
    //   institution: "Global Tech Academy",
    //   period: "2021",
    //   description: "Sertifikasi komprehensif mencakup React.js, Node.js, Database Architecture, CI/CD, dan Security Best Practices.",
    // },
  ],
};
