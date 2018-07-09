import DocHandlers from '../handlers/documento'

export default ([
    {
        method: 'GET',
        path: '/api/v1/documenti',
        config: {
            description: 'Restituisce tutti i documenti',
            tags: ['api', 'v1', 'documenti']
        },
        handler: DocHandlers.getDocumenti
    },
    {
        method: 'POST',
        path: '/api/v1/documenti',
        config: {
            description: 'Crea un nuovo documento',
            tags: ['api', 'v1', 'documento']
        },
        handler: DocHandlers.creaDocumento
    }        

])