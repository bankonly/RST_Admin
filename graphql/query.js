const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    provinces: [Provinces!]
    districts: [Districts!]
  }

  type Mutation {
    world: String
  }
  # province model
  type Provinces {
    id: Int
    pr_name: String
    pr_name_en: String
  }
  type Districts {
    id: Int
    dr_name: String
    dr_name_en: String
    province: Int
  }
`;
module.exports = typeDefs;
