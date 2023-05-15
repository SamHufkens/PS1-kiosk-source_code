const mongoose = require('mongoose');

const activitiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    }
})


const Activity = mongoose.model('activiteit', activitiesSchema);
module.exports = Activity;