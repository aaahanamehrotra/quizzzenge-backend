const mongoose = require('mongoose');

// {id:uuidv4(), question: "question", options: ["1", "2", "3", "4"], correct:"1", quizId:quizId}, {id:uuidv4(), question: "question", options: ["1", "2", "3", "4"], correct:"1", quizId:quizId}
const quizSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    quizId:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('quizSchema', quizSchema)