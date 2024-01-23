// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk logging waktu permintaan
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${req.method} ${req.url}`);
  next(); // Lanjutkan ke middleware atau penanganan berikutnya
});

// Middleware untuk menangani permintaan statis (contoh)
app.use(express.static('public'));

// Middleware untuk mengubah data permintaan (contoh)
app.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body = 'Data telah dimodifikasi oleh middleware';
  }
  next();
});

// Route utama
app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
