const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({
    ragioneSociale: String,
    codiceFiscale: String,
    partitaIva: String
}, {collection: 'clienti'})

module.exports = mongoose.model('Cliente', ClienteSchema)