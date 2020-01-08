const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
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
        images: [Image]
    }
    type Image {
        id: ID!
        image_url: String
        art_id: Int
    }
    type Contact {
        school_id: ID!
        name: String
        email: String
        message: String
    }
    type Query {
        allSchools: [School!]!
        school(id: ID!): School!
        schoolBySchoolId (school_id: ID!): School!
        allCategories: [Category!]!
        category(id: ID!): Category!
        allArts: [Art!]!
        art(id: ID!): Art!
        artBySchool(school_id: ID!): [Art!]!
        artByCategory(category: ID!): [Art!]!
        allImages: [Image!]!
        image(id: ID!): Image!
        imageByArt(art_id: ID!): [Image!]! 
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
        addImage(
            image_url: String
            art_id: Int
        ): Image!
        updateSchool(
            id: ID!
            school_name: String!
            email: String!
            address: String!
            city: String!
            zipcode: String!
        ): School!
        updateArt(
            id: ID!
            price: Int
            sold: Boolean
            title: String
            artist_name: String
            description: String
        ): Art!
        updateImage(
            id: ID!
            image_url: String
            art_id: Int
        ): Image!
        deleteSchool(
            id: ID!
        ): School
        deleteArt(
            id: ID!
        ): Art
        deleteImage(
            id: ID!
        ): Image
        contact (
            school_id: ID!
            name: String
            email: String
            message: String
        ): Contact!
    }
`
module.exports = typeDefs
=======
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
    school_id: ID!
    price: Int
    sold: Boolean
    title: String
    artist_name: String
    description: String
    date_posted: String
    school: School
    category: Category
    images: [Image]
  }
  type Image {
    id: ID!
    image_url: String
    art_id: Int
  }
  type Query {
    allSchools: [School!]!
    school(id: ID!): School!
    schoolBySchoolId(school_id: ID!): School!
    allCategories: [Category!]!
    category(id: ID!): Category!
    allArts: [Art!]!
    art(id: ID!): Art!
    artBySchool(school_id: ID!): [Art!]!
    artByCategory(category: ID!): [Art!]!
    allImages: [Image!]!
    image(id: ID!): Image!
    imageByArt(art_id: ID!): [Image!]!
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
    addImage(image_url: String, art_id: Int): Image!
    updateSchool(
      id: ID!
      school_name: String!
      email: String!
      address: String!
      city: String!
      zipcode: String!
    ): School!
    updateArt(
      id: ID!
      price: Int
      sold: Boolean
      title: String
      artist_name: String
      description: String
    ): Art!
    updateImage(id: ID!, image_url: String, art_id: Int): Image!
    deleteSchool(id: ID!): School
    deleteArt(id: ID!): Art
    deleteImage(id: ID!): Image
  }
`;
module.exports = typeDefs;
>>>>>>> 4def4ec1a717868619c3c7ecd366d67e7459e120
