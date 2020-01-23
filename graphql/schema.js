const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input ArtInput {
    where: ArtWhere
    limit: Int
    offset: Int
    sort: ArtSort
  }
  input StringWhere {
    is: String
    not: String
    in: [String]
    not_in: [String]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    not_contains: String
    starts_with: String
    not_starts_with: String
    ends_with: String
    not_ends_with: String
  }
  input BooleanWhere {
    is: Boolean!
  }
  input ArtWhere {
    OR: [ArtWhere]
    AND: [ArtWhere]
    id: StringWhere
    title: StringWhere
    artist_name: StringWhere
    description: StringWhere
    school: StringWhere
    category: StringWhere
    sold: BooleanWhere 
  }
  input ArtSort {
    id: SortDirection
    title: SortDirection
    artist_name: SortDirection
    description: SortDirection
    school: SortDirection
    category: SortDirection
    sold: SortDirection
  }
  type ArtResults {
    hasMore: Boolean!
    totalCount: Int!
    items: [Art]!
  }
  enum SortDirection {
    DESC
  }
  type School {
    id: ID!
    school_id: ID!
    school_name: String!
    email: String!
    address: String!
    city: String!
    zipcode: String!
    art: [Art]
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
  type Contact {
    sendto: String
    name: String
    subject: String
    fromUser: String
    message: String
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
    listArt(input: ArtInput): ArtResults!
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
      image_url: String!
    ): Art
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
      category: ID
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
    sendMail(
      sendto: String
      name: String
      subject: String
      fromUser: String
      message: String
    ): Contact
  }
`;
module.exports = typeDefs;
