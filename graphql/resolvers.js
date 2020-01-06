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
            const [ id ] =  await db('schools').insert(args, 'id')
            return db('schools').where('id', id).first()
        },
        addArt: async (parent, args) => {
            const [ id ] = await db('art').insert(args, 'id')            
            return db('art').where('id', id).first()
        },
        addImage: async (parent, args) => {
            const [ id ] = await db('images').insert(args, 'id')
            return db('images').where('id', id).first()
        },
        updateSchool: async (parent, args) => {
            await db('schools').where('id', args.id).update(args)
            return db('schools').where('id', args.id).first()
        },
        updateArt: async (parent, args) => {
            await db('art').where('id', args.id).update(args)
            return db('art').where('id', args.id).first()
        },
        updateImage: async (parent, args) => {
            await db('images').where('id', args.id).update(args)
            return db('images').where('id', args.id).first()
        },
        deleteSchool: async (parent, args) => {
            const deletedSchool = await db('schools').where('id', args.id).first()
            await db('schools').where('id', args.id).del()

            return deletedSchool
        },
        deleteArt: async (parent, args) => {
            const deletedArt = await db('art').where('id', args.id).first()
            await db('art').where('id', args.id).del()

            return deletedArt
        },
        deleteImage: async (parent, args) => {
            const deletedImage = await db('images').where('id', args.id).first()
            await db('images').where('id', args.id).del()

            return deletedImage
        }
    }
}

module.exports = resolvers