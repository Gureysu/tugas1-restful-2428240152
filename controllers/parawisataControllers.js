const Parawisata = require('../models/parawisataModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
    try {
        const parawisata = await Parawisata.create(req.body);
        res.status(201).json(parawisata);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAll = async (req, res) => {
    const data = await Parawisata.find();
    res.json(data);
};

exports.getById = async (req, res) => {
    const data = await Parawisata.findById(req.params.id);
    if (!data) throw errorHttp(404, 'Data tidak ditemukan');
    res.json(data);
};

exports.update = async (req, res) => {
    const data = await Parawisata.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: 'after', runValidators: true }
    );
    if (!data) throw errorHttp(404, 'Data tidak ditemukan');
    res.json(data);
};

exports.remove = async (req, res) => {
    const data = await Parawisata.findByIdAndDelete(req.params.id);
    if (!data) throw errorHttp(404, 'Data tidak ditemukan');
    res.status(204).send();
};