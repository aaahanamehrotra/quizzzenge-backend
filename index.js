const express = require('express');
const mongoose = require('mongoose')
const quiz = require('./model/quizSchema')
const cors = require('cors');
const idSchema = require('./model/idSchema')


require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
      
uri = process.env.MONGO_URI

mongoose.connect(uri, () => console.log("hello"))

app.get("/", async(req, res) =>{
    console.log("getting")
    console.log(idSchema.find())
    try{
        const hello = await quiz.find()
        // console.log(hello)
        res.json(hello)
    }catch(err){
        res.send(err)
    }
})

app.get("/:id", async(req, res) =>{
    console.log("getting")
    console.log(req.params)

    try{
        const hello = await quiz.find({quizId: req.params.id})
        console.log(hello)
        res.json(hello)
    }catch(err){
        res.send(err)
    }
})

app.post('/name', async(req, res) =>{
    console.log("posting")
    console.log(req.body)
    const test = new idSchema({
        id: req.body.id,
        quizname: req.body.quizname
    })
    try{
        const data = await test.save()
        console.log(data)
        res.json(data)
    }catch(err){
        res.send(err)
    }})

app.post("/", async(req, res) =>{
    console.log("posting")
    // console.log(req.body)
    const ques = new quiz({
        id: req.body.id,
        question: req.body.question,
        options: req.body.options,
        correct: req.body.correct,
        quizId: req.body.quizId
    })
    try{
        const data = await ques.save()
        // console.log(ques)
        res.json(data)
    }catch(err){
        res.send(err)
    }
})

app.listen(5000, () => console.log("listening"))