const express = require('express');
const app = express();
const PORT = 3000;

// Middleware agar req.body (JSON) dapat dibaca
app.use(express.json());

// Data sementara (disimpan di memori, hilang saat server restart)
let Parawista = [
    {id: 1, nama: "Kawah Putih", kota: "Bandung", kategori: "alam", hargaTiket: 30000, jamBuka: "07.00-17.00"},
    {id: 2, nama: "Tangkuban Perahu", kota: "Bandung", kategori: "alam", hargaTiket: 50000, jamBuka: "08.00-16.00"},
];
let nextId = 3; // penghitung id untuk data baru

app.get('/', (req, res) => {
    res.send('Server Express.js berjalan!');
});

// GET /Parawista -> menampilkan seluruh data
app.get('/Parawista', (req, res) => {
    res.json(Parawista);
});

// GET /Parawista -> seluruh data, bisa difilter: /Parawista?kategori=alam
app.get('/Parawista', (req, res) => {
    const { kategori } = req.query;

    if (kategori) {
        const hasil = Parawista.filter((p) => p.kategori === kategori);
        return res.json(hasil);
    }

    res.json(Parawista);
});

// GET /Parawista/:id -> menampilkan satu data berdasarkan id
app.get('/Parawista/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = Parawista.find((p) => p.id === id);

    if (!data) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.json(data);
});

// POST /Parawista
// Body: { "nama": "Citra", "kota": "Bandung", "kategori": "alam", "hargaTiket": 30000, "jamBuka": "07.00-17.00" }
app.post('/Parawista', (req, res) => {
    const { nama, kota, kategori, hargaTiket, jamBuka } = req.body;

    if (!nama || !kota || !kategori || !hargaTiket || !jamBuka) {
        return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    const baru = { id: nextId++, nama, kota, kategori, hargaTiket, jamBuka };

    Parawista.push(baru);
    res.status(201).json(baru);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});