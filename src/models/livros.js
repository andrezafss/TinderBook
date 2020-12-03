const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    id : { type : Number},
    nome: { type: String },
    autor: { type: String },
    descricao: { type: String },
    nomeLeitor: { type: String }
},{
    versionKey: false
});

const livros = mongoose.model('livros', livrosSchema);

module.exports = livros;