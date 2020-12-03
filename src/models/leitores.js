const mongoose = require('mongoose');

const leitoresSchema = new mongoose.Schema({
    id : { type : Number},
    nome: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    telefone: { type: String}
   
},{
    versionKey: false
});

const leitores = mongoose.model('leitores', leitoresSchema);

module.exports = leitores;