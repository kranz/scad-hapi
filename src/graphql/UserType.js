const graphql = require('graphql')
const { GraphQLList, GraphQLObjectType, GraphQLString} = graphql

var emailObj = new GraphQLObjectType({
    name: 'emailObj',
    fields: () => ({
      value: { type: GraphQLString },
      emailType: { type: GraphQLString }
    })
  });
  var nameObj = new GraphQLObjectType({
    name: 'nameObj',
    fields: () => ({
      familyName: { type: GraphQLString },
      givenName: { type: GraphQLString },
      middleName: { type: GraphQLString }
    })
  });


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        provider: { type: GraphQLString },
        displayName: { type: GraphQLString },
        name: { type: nameObj },
        emails: { type: new GraphQLList (emailObj)}
    })
})

module.exports = UserType