const db = require('../data/dbConfig.js');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const options = {
  auth: {
    api_user: process.env.SGUS,
    api_key: process.env.SGPW,
  },
};

const client = nodemailer.createTransport(sgTransport(options));

const resolvers = {
  Query: {
    allSchools: () => {
      return db('schools');
    },
    school: (parent, { id }) => {
      return db('schools')
        .where({ id })
        .first();
    },
    schoolBySchoolId: (parent, { school_id }) => {
      return db('schools')
        .where({ school_id })
        .first();
    },
    allCategories: () => {
      return db('categories');
    },
    category: (parent, { id }) => {
      return db('categories')
        .where({ id })
        .first();
    },
    allArts: () => {
      return db('art');
    },
    art: (parent, { id }) => {
      return db('art')
        .where({ id })
        .first();
    },
    artBySchool: (parent, { school_id }) => {
      return db('art').where({ school_id });
    },
    artByCategory: (parent, { category }) => {
      return db('art').where('category', '=', category);
    },
    allImages: () => {
      return db('images');
    },
    image: (parent, { id }) => {
      return db('images')
        .where({ id })
        .first();
    },
    imageByArt: (parent, { art_id }) => {
      return db('images').where({ art_id });
    },
  },
  Mutation: {
    addSchool: async (parent, args) => {
      const [id] = await db('schools').insert(args, 'id');
      return db('schools')
        .where('id', id)
        .first();
    },
    addArt: async (parent, args) => {
      const [school] = await db('schools').where('school_id', args.school_id);
      const [artId] = await db('art').insert(
        {
          title: args.title,
          category: args.category,
          school_id: school.id,
          price: args.price,
          artist_name: args.artist_name,
          description: args.description,
        },
        'id'
      );
      const [imgId] = await db('images').insert({
        image_url: args.image_url,
        art_id: artId,
      });
      return db('art')
        .where('id', artId)
        .first();
    },
    addImage: async (parent, args) => {
      const [id] = await db('images').insert(args, 'id');
      return db('images')
        .where('id', id)
        .first();
    },
    updateSchool: async (parent, args) => {
      await db('schools')
        .where('id', args.id)
        .update(args);
      return db('schools')
        .where('id', args.id)
        .first();
    },
    updateArt: async (parent, args) => {
      await db('art')
        .where('id', args.id)
        .update(args);
      return db('art')
        .where('id', args.id)
        .first();
    },
    updateImage: async (parent, args) => {
      await db('images')
        .where('id', args.id)
        .update(args);
      return db('images')
        .where('id', args.id)
        .first();
    },
    deleteSchool: async (parent, args) => {
      const deletedSchool = await db('schools')
        .where('id', args.id)
        .first();
      await db('schools')
        .where('id', args.id)
        .del();

      return deletedSchool;
    },
    deleteArt: async (parent, args) => {
      console.log(`<<< art deleted >>>`);
      const deletedArt = await db('art')
        .where('id', args.id)
        .first();
      await db('art')
        .where('id', args.id)
        .del();

      return deletedArt;
    },
    deleteImage: async (parent, args) => {
      const deletedImage = await db('images')
        .where('id', args.id)
        .first();
      await db('images')
        .where('id', args.id)
        .del();

      return deletedImage;
    },
    sendMail: async (parent, args) => {
      const { sendto, name, subject, fromUser, message } = args;
      const email = {
        from: fromUser,
        to: sendto,
        subject: subject,
        text: `Hello from ${name}, they say ${message}`,
        html: `<b>Hello from ${name}, they say ${message}`,
      };

      client.sendMail(email, (err, info) => {
        if (err) {
          console.log('error in sending mail', err);
        } else {
          console.log(info);
        }
      });
      return args;
    },
  },
  Art: {
    images: async parent => {
      const id = parent.id;
      return db('images').where('art_id', id);
    },
    school: async parent => {
      const id = parent.school_id;
      return db('schools')
        .where({ id })
        .first();
    },
    category: async parent => {
      const id = parent.category;
      return db('categories')
        .where({ id })
        .first();
    },
  },
  School: {
    art: async parent => db('art').where('school_id', parent.id),
  },
};

module.exports = resolvers;
