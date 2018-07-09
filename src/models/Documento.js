const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DocumentoSchema = new Schema({
    nome: String,
    descrizione: String,
}, {collection: 'documenti'})

module.exports = mongoose.model('Documento', DocumentoSchema)