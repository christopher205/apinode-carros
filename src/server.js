const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://chris321:O4MAsai9jTNWhXKN@cluster0.o6gdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)
app.listen(3000)

/*
Instancia o servidor express
conecta com o banco Mongo DB
Serve na porta 3000

*/