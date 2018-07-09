import UserHandlers from '../handlers/user'

export default ([
    {
        method: 'GET',
        path: '/api/v1/users',
        config: {
            description: 'Restituisce tutti gli utenti',
            tags: ['api', 'v1', 'users']
        },
        handler: UserHandlers.getUsers
    },
    {
        method: 'POST',
        path: '/api/v1/users',
        config: {
            description: 'Crea un nuovo user',
            tags: ['api', 'v1', 'user']
        },
        handler: UserHandlers.creaUser
    }    
])