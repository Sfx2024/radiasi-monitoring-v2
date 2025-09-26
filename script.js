// Inisialisasi grafik
const ctx = document.getElementById('grafikRadiasi').getContext('2d');
const grafik = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Intensitas Radiasi (W/m²)',
      data: [],
      borderColor: 'orange',
      fill: false
    }]
  }
});

// Fungsi ambil dan tampilkan data dari Firebase
function ambilData(tanggalFilter = null) {
  db.ref('radiasi').once('value').then(snapshot => {
    const data = snapshot.val();
    const timestamps = [];
    const values = [];

    for (let key in data) {
      const item = data[key];

      // Pastikan semua field ada
      if (!item || !item.timestamp || !item.irradiance || !item.tanggal) continue;

      // Filter berdasarkan tanggal jika ada
      if (!tanggalFilter || item.tanggal === tanggalFilter) {
        timestamps.push(item.timestamp);
        values.push(item.irradiance);
      }
    }

    // Update grafik
    grafik.data.labels = timestamps;
    grafik.data.datasets[0].data = values;
    grafik.update();

    // Statistik
    if (values.length > 0) {
      const max = Math.max(...values);
      const min = Math.min(...values);
      const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);

      document.getElementById('max').textContent = `${max} W/m²`;
      document.getElementById('min').textContent = `${min} W/m²`;
      document.getElementById('avg').textContent = `${avg} W/m²`;

      // Simulasi PLTS
      const efisiensiPanel = 0.18;
      const luasPanel = 1.6;
      const energiKWh = ((values.reduce((a, b) => a + b, 0) * luasPanel * efisiensiPanel) / 1000).toFixed(2);
      document.getElementById('energi').textContent = energiKWh;
    } else {
      document.getElementById('max').textContent = '--';
      document.getElementById('min').textContent = '--';
      document.getElementById('avg').textContent = '--';
      document.getElementById('energi').textContent = '--';
    }
  }).catch(error => {
    console.error("Gagal ambil data:", error);
  });
}

// Fungsi filter tanggal
function filterData() {
  const tanggal = document.getElementById('tanggal').value;
  ambilData(tanggal || null);
}

// Fungsi toggle edukasi
function toggleEdukasi() {
  const konten = document.getElementById('kontenEdukasi');
  konten.style.display = konten.style.display === 'none' ? 'block' : 'none';
}

// Fungsi toggle mode terang/gelap
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Ambil data awal (tanpa filter)
ambilData();