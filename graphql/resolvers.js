const db = require('../data/dbConfig.js')

const resolvers = {
    Query: {
        allSchools: () => {
            return db('schools')
        },
        school: (parent, {id}) => {
            return db('schools').where({id}).first()
        },
        schoolBySchoolId: (parent, {school_id}) => {
            return db('schools').where({school_id}).first()   
        },
        allCategories: () => {
            return db('categories')
        },
        category: (parent, {id}) => {
            return db('categories').where({id}).first()
        },
        allArts: () => {
            return db('art')
        },
        art: (parent, {id}) => {
            return db('art').where({id}).first()
        },
        artBySchool: (parent, {school_id}) => {
            return db('art').where({school_id})
        },
        artByCategory: (parent, {category}) => {
            return db('art').where("category", "=", category)
        },
        allImages: () => {
            return db('images')
        },
        image: (parent, {id}) => {
            return db('images').where({id}).first()
        },
        imageByArt: (parent, {art_id}) => {
            return db('images').where({art_id})
        }
    },
    Mutation: {
        addSchool: async (parent, args) => {
            const newSchool = args 
            await db('schools').insert(newSchool)
            return newSchool
        },
        addArt: async (parent, args) => {
            const newArt = args 
            await db('art').insert(newArt)
            return newArt
        },
        addImage: async (parent, args) => {
            const newImage = args
            await db('images').insert(newImage)
            return newImage
        }
    }
}

module.exports = resolvers