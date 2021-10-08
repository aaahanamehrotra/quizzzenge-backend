const mongoose = require('mongoose');

const idSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    quizname: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('idSchema', idSchema)