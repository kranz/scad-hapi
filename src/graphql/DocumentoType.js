const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString} = graphql

const DocumentoType = new GraphQLObjectType({
    name: 'Documento',
    fields: () => ({
        id: { type: GraphQLString },
        nome: { type: GraphQLString },
        descrizione: { type: GraphQLString }
    })
})

module.exports = DocumentoType