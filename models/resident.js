const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    initialen: {
        type: String,
        required: true
    },

    afdeling: {
        type: Number,
        required: true
    },

    kamernummer: {
        type: Number,
        required: true
    },

    actief: {
        type: Boolean,
        required: true
    },

    plattegrond: {
        type: String,
        required: false
    }
})

const Resident = mongoose.model('bewoner', residentSchema);
module.exports = Resident;