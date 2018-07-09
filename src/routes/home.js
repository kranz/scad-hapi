import Home from '../handlers/home'

export default ([
    {
        method: 'GET',
        path: '/',
        handler: Home.getHome
    },
    {
        method: 'GET',
        path: '/about',
        handler: Home.getAbout
    }

])
