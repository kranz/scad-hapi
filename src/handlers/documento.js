import Documento from '../models/Documento'

export default {
    getDocumenti: (req,reply) => {
        return Documento.find()
    },
    creaDocumento: (req,reply) => {
        const { nome, descrizione } = req.payload
        const documento = new Documento({
            nome,
            descrizione
        })
        return documento.save()
    }
}