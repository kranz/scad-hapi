const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString} = graphql

const ClienteType = new GraphQLObjectType({
    name: 'Cliente',
    fields: () => ({
        id: { type: GraphQLString },
        ragioneSociale: { type: GraphQLString },
        codiceFiscale: { type: GraphQLString },
        partitaIva: { type: GraphQLString }
    })
})

module.exports = ClienteType