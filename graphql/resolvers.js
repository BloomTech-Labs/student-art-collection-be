const db = require('../data/dbConfig.js')

const resolvers = {
    Query: {
        allSchools: () => {
            return db('schools')
        },
        school: (parent, {id}) => {
            return db('schools').where({id}).first()
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
        }
    },
    Mutation: {
        addSchool: async (parent, args) => {
            const newSchool = args 
            await db('schools').insert(newSchool)
            return newSchool
        },
        addArt: async (parent, arts) => {
            const newArt = arts 
            console.log(newArt)
            await db('art').insert(newArt)
            return newArt
        }
    }
}

module.exports = resolvers