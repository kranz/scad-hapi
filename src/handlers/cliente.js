import Cliente from '../models/Cliente'

export default {
    getClienti: (req,reply) => {
        return Cliente.find()
    },
    creaCliente: (req,reply) => {
        const { ragioneSociale, codiceFiscale, partitaIva } = req.payload
        const cliente = new Cliente({
            ragioneSociale,
            codiceFiscale,
            partitaIva
        })
        return cliente.save()
    }
}


