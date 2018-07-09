import hapi from 'hapi'
import mongoose from 'mongoose'
import Inert from 'inert'
import HapiSwagger from 'hapi-swagger'
import Vision from 'vision'
import Pack from '../package'
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'
import schema from './graphql/schema'
import home from './routes/home'
import cliente from './routes/cliente'
import documento from './routes/documento'
import user from './routes/user'

mongoose.connect('mongodb://kranz:password@192.168.254.4:27017/myapi', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})

const server = hapi.server({
    port: 4000,
    host: 'localhost'
})

const init = async () => {

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Documentazione API Scadenziario',
                    version: Pack.version
                }
            }
        } 
      ])
  
    await server.register({
      plugin: graphiqlHapi,
      options: {
          path: '/graphiql',
          graphiqlOptions: {
              endpointURL: '/graphql'
          },
          route: {
              cors:true
          }
      }  
    })
    await server.register({
        plugin: graphqlHapi,
        options: {
            path: '/graphql',
            graphqlOptions: {
                schema
            },
            route: {
                cors:true
            }
        }  
      })
    server.route(home)
    server.route(cliente)
    server.route(documento)
    server.route(user)
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()
