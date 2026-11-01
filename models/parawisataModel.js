
const mongoose = require('mongoose');

const fasilitasSchema = new mongoose.Schema({
    Parkir: { type: Boolean, default: false },
    Musholla: { type: Boolean, default: false },
    Toilet: { type: Boolean, default: false },
    Kuliner: { type: Boolean, default: false },
    ramahDisabilitas: { type: Boolean, default: false }
}, { _id: false });

const parawisataSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'nama wajib diisi'],
        trim: true
    },
    kota: {
        type: String,
        required: [true, 'kota wajib diisi'],
        trim: true
    },
    kategori: {
        type: String,
        required: [true, 'kategori wajib diisi'],
        trim: true
    },
    hargaTiket: {
        type: Number,
        required: [true, 'harga tiket wajib diisi']
    },
    jamBuka: {
        type: String,
        required: [true, 'jam buka wajib diisi'],
        trim: true
    },
    fasilitas: {
        type: fasilitasSchema,
        default: () => ({})
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Parawisata', parawisataSchema);
