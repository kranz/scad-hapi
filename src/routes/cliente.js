import CliHandlers from '../handlers/cliente'

export default ([
    {
        method: 'GET',
        path: '/api/v1/clienti',
        config: {
            description: 'Restituisce tutti i clienti',
            tags: ['api', 'v1', 'clienti']
        },
        handler: CliHandlers.getClienti
    },
    {
        method: 'POST',
        path: '/api/v1/clienti',
        config: {
            description: 'Crea un nuovo cliente',
            tags: ['api', 'v1', 'cliente']
        },
        handler: CliHandlers.creaCliente
    }    
])