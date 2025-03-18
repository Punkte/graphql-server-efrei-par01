import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    doctors: [Doctor!]!
    doctor(id: ID!): Doctor
  }

  type Doctor {
    id: ID!
    name: String!
    speciality: Speciality
  }

  enum Speciality {
    PSYCHOLOGIST
    OPTHALMOLOGIST
  }
`