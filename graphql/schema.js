const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type School {
        id: ID!
        school_id: ID!
        school_name: String!
        email: String!
        address: String!
        city: String!
        zipcode: String!
    }
    type Category {
        id: ID!
        category: String!
    }
    type Art {
        id: ID!
        category: ID!
        school_id: ID!
        price: Int
        sold: Boolean
        title: String
        artist_name: String
        description: String
        date_posted: String
    }
    type Query {
        allSchools: [School!]!
        school(id: ID!): School!
        allCategories: [Category!]!
        category(id: ID!): Category!
        allArts: [Art!]!
        art(id: ID!): Art!
        artBySchool(school_id: ID!): [Art!]!
        artByCategory(category: ID!): [Art!]!
    }
    type Mutation {
        addSchool(
            school_id: ID!
            school_name: String!
            email: String!
            address: String!
            city: String!
            zipcode: String!
        ): School!
        addArt(
            category: ID!
            school_id: ID!
            price: Int
            sold: Boolean
            title: String
            artist_name: String
            description: String
            date_posted: String
        ): Art!
    }
`
module.exports = typeDefs