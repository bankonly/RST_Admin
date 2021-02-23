const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    provinces: [Provinces]
  },
  type Mutation {
    world: String
  }
  type Provinces{
    id:Int,
    pr_name:String,
    pr_name_en:String,

}
`;
module.exports = typeDefs