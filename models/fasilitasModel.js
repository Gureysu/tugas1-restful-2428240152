const mongoose = require('mongoose');

const fasilitasSchema = new mongoose.Schema({
    Parkir: { type: Boolean, default: false },
    Musholla: { type: Boolean, default: false },
    Toilet: { type: Boolean, default: false },
    Kuliner: { type: Boolean, default: false },
    ramahDisabilitas: { type: Boolean, default: false }
}, { _id: false });

module.exports = fasilitasSchema;