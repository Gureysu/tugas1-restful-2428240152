const Fasilitas = require('../models/parawisataModel');

exports.create = async (req, res) => {
    try {
        const fasilitas = await Fasilitas.create(req.body);
        res.status(201).json(fasilitas);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAll = async (req, res) => {
    res.json(await Fasilitas.find());
};