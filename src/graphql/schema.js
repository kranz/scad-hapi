const graphql = require('graphql')
const ClienteType = require('./ClienteType')
const Cliente = require('./../models/Cliente')
const DocumentoType = require('./DocumentoType')
const Documento = require('./../models/Documento')
const UserType = require('./UserType')
const User = require('./../models/User')
const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cliente: {
            type: ClienteType,
            args: { id: { type: GraphQLString } },
            resolve(parent,args){
                return Cliente.findById(args.id)
            }
        },
        clienti: {
            type: new GraphQLList(ClienteType),
            resolve(parent,args) {
                return Cliente.find()
            }
        },
        documento: {
            type: DocumentoType,
            args: { id: { type: GraphQLString } },
            resolve(parent,args){
                return Documento.findById(args.id)
            }
        },
        documenti: {
            type: new GraphQLList(DocumentoType),
            resolve(parent,args) {
                return Documento.find()
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent,args){
                return User.findById(args.id)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return User.find()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})