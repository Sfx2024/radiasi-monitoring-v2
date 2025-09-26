# 🌞 Radiasi Monitoring Web

Sistem monitoring radiasi matahari berbasis web yang menampilkan grafik intensitas radiasi, statistik harian, dan simulasi energi PLTS. Dibangun untuk mendukung edukasi energi terbarukan dan visualisasi data IoT secara real-time.

## 🔍 Fitur Utama

- **Grafik Radiasi** — Visualisasi data intensitas radiasi menggunakan Chart.js
- **Filter Tanggal** — Menampilkan data berdasarkan tanggal yang dipilih
- **Statistik Otomatis** — Hitung maksimum, minimum, dan rata-rata radiasi
- **Simulasi Energi PLTS** — Estimasi energi listrik berdasarkan efisiensi panel
- **Mode Edukasi** — Penjelasan ilmiah tentang radiasi dan pemanfaatannya
- **Mode Terang/Gelap** — Tampilan UI yang adaptif dan nyaman

## 🚀 Teknologi

- HTML, CSS, JavaScript
- Firebase Realtime Database
- Chart.js
- GitHub Pages

## 📡 Live Demo

🔗 [Lihat Web](https://sfx2024.github.io/radiasi-monitoring-v2/)

## 📁 Struktur Proyek

```
radiasi-monitoring-v2/
├── index.html
├── style.css
├── script.js
└── config.js
```

## 📦 Cara Menjalankan

1. Clone repo ini:
   ```bash
   git clone https://github.com/sfx2024/radiasi-monitoring-v2.git
   ```
2. Buka `index.html` di browser
3. Pastikan `config.js` berisi konfigurasi Firebase kamu
4. Tambahkan data ke Firebase dengan format:
   ```json
   {
     "timestamp": "09:00",
     "irradiance": 300,
     "tanggal": "2025-09-26"
   }
   ```

## 👨‍💻 Pengembang

**Felix Bragi Aditya Sitorus**  
Taruna Instrumentasi-MKG STMKG 2022  
Fokus: IoT, Web Visualization, dan Edukasi Interaktif

