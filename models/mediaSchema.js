const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: Object, required: false, default: {} },
    success: { type: Boolean, required: false },
    status: { type: Number, required: false }
})

module.exports = mongoose.model("Media", mediaSchema, "mediafiles")