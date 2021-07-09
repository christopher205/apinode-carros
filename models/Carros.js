const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    montadora: String,
    ano: { type: Number,
        Default: null,
    }

})
module.exports = mongoose.model('Carros', UserSchema)

/*
Descreve os campos do banco de dados e qual será o tipo de dado que irá receber.

*/