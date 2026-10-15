const parawisataModel = require('../models/parawisataModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
    const { kota, kategori } = req.query;
    res.json(parawisataModel.getAll(kota, kategori));
};

exports.getById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const data = parawisataModel.getById(id);
    if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
    res.json(data);
};

exports.create = (req, res, next) => {
    const { nama, kota, kategori, hargaTiket, jamBuka } = req.body;
    if (!nama || !kota || !kategori || !hargaTiket || !jamBuka) return next(errorHttp(400, 'Semua field wajib diisi'));

    const baru = parawisataModel.create({ nama, kota, kategori, hargaTiket, jamBuka });
    res.status(201).json(baru);
};

exports.update = (req, res, next) => {
    const id = parseInt(req.params.id);
    const hasil = parawisataModel.update(id, req.body);
    if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
    res.json(hasil);
};

exports.remove = (req, res, next) => {
    const id = parseInt(req.params.id);
    const berhasil = parawisataModel.remove(id);
    if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
    res.status(204).send();
};