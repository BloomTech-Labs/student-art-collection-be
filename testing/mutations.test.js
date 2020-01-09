process.env.DB_ENV = 'testing';

const chai = require('chai')
const expect = chai.expect;
const url = 'http://localhost:4000'
const request = require('supertest')(url)
const db = require('../data/dbConfig.js')

// YOU NEED TO RESEED THE DATABASE AT THE CURRENT POINT IN TESTING

// describe('It resets the database', () => {
//     beforeEach(async () => {
//         await db('schools').trun
//         await request.post('/graphql')
//         .send({query: 'mutation { addSchool (school_id: "123abc456def789ghi", school_name: "West High School", email: "test-email@example.com", address: "123 West St", city: "Westtown", zipcode: "12345"'})
//         .end((err, res) => {
//             if (err) {
//                 console.log('error in resetting tables', err)
//                 return done()
//             } else {
//                 return done()
//             }
//         })
//     })
// })

describe('It adds items to the database', () => {
    it('adds a new school', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { addSchool (school_id: "xtrothealienmonster", school_name: "Xtro High!", email: "xtro@gmail.com", address: "Fake Address", city: "Faketown", zipcode: "Nope!") { school_id, school_name, email, address, city, zipcode } }'})
        .end((err, res) => {
            if (err) {
                console.log('error in adding a new school', err)
                return done()
            } else {
                //console.log('complete', res.body.data.addSchool)
                expect(res.body.data.addSchool).to.have.property('school_id')
                expect(res.body.data.addSchool).to.have.property('school_name')
                expect(res.body.data.addSchool).to.have.property('email')
                expect(res.body.data.addSchool).to.have.property('address')
                expect(res.body.data.addSchool).to.have.property('city')
                expect(res.body.data.addSchool).to.have.property('zipcode')
                return done();
            }
        })
    })
    it('adds a new art', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { addArt (category: 1, school_id: 1, price: 1300, sold: false, title: "Title of Ortx", artist_name: "Ortx", description: "Horror movie") { category {id, category}, school_id, price, sold, title, artist_name, description, date_posted } }'})
        .end((err, res) => {
            if (err) {
                console.log('error in adding a new art', err)
                return done()
            } else {
                console.log('complete', res.body)
                expect(res.body.data.addArt).to.have.property('category')
                expect(res.body.data.addArt).to.have.property('school_id')
                expect(res.body.data.addArt).to.have.property('price')
                expect(res.body.data.addArt).to.have.property('sold')
                expect(res.body.data.addArt).to.have.property('title')
                expect(res.body.data.addArt).to.have.property('artist_name')
                expect(res.body.data.addArt).to.have.property('description')
                expect(res.body.data.addArt).to.have.property('date_posted')
                return done();
            }
        })
    })
    it('adds a new image', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { addImage (image_url: "mightlikeapizza.io" art_id: 1) {image_url, art_id} }'})
        .end((err, res) => {
            if (err) { 
                console.log('error in adding a new image', err)
                return done()
            } else {
                //console.log('complete', res.body.data.addImage)
                expect(res.body.data.addImage).to.have.property('image_url')
                expect(res.body.data.addImage).to.have.property('art_id')
                return done()
            }
        })
    })
})

describe('It updates items in the database', () => {
    it('updates a school in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation {updateSchool (id: 2, school_name: "Xtro High 2!", email: "xtro@gmail.com", address: "Fake Address", city: "Faketown", zipcode: "Nope!") {id, school_name, email, address, city, zipcode} }'})
        .end((err, res) => {
            if (err) {
                console.log('error in updating a school', err)
                return done()
            } else {
                //console.log('complete', res.body.data.updateSchool)
                expect(res.body.data.updateSchool).to.have.property('id')
                expect(res.body.data.updateSchool).to.have.property('school_name')
                expect(res.body.data.updateSchool).to.have.property('email')
                expect(res.body.data.updateSchool).to.have.property('address')
                expect(res.body.data.updateSchool).to.have.property('city')
                expect(res.body.data.updateSchool).to.have.property('zipcode')
                return done()
            }
        })
    })
    it('updates an art in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation {updateArt (id: 6, price: 3100, sold: true, title: "Titles", artist_name: "Names", description: "Something" ) {id, price, sold, title, artist_name, description}}'})
        .end((err, res) => {
            if (err) {
                console.log('error in updating an art', err)
                return done()
            } else {
                //console.log('complete', res.body)
                expect(res.body.data.updateArt).to.have.property('id')
                expect(res.body.data.updateArt).to.have.property('price')
                expect(res.body.data.updateArt).to.have.property('sold')
                expect(res.body.data.updateArt).to.have.property('title')
                expect(res.body.data.updateArt).to.have.property('artist_name')
                expect(res.body.data.updateArt).to.have.property('description')
                return done()
            }
        })
    })
    it('updates an image in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation {updateImage (id: 11, image_url: "mightlikeapasta.io" art_id: 1) {id, image_url, art_id} }'})
        .end((err, res) => {
            if (err) {
                console.log('error in updating an image', err)
                return done()
            } else {
                //console.log('complete', res.body.data.updateImage)
                expect(res.body.data.updateImage).to.have.property('id')
                expect(res.body.data.updateImage).to.have.property('image_url')
                expect(res.body.data.updateImage).to.have.property('art_id')
                return done()
            }
        })
    })
})

describe('It deletes items in the database', () => {
    it('deletes a new school in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { deleteSchool (id: 2) { id, school_id, school_name, email, address, city, zipcode } }'})
        .end((err, res) => {
            if (err) {
                console.log('error in deleting a newly added school', err)
                return done()
            } else {
                //console.log('complete', res.body.data)
                expect(res.body.data.deleteSchool).to.have.property('id')
                expect(res.body.data.deleteSchool).to.have.property('school_id')
                expect(res.body.data.deleteSchool).to.have.property('school_name')
                expect(res.body.data.deleteSchool).to.have.property('email')
                expect(res.body.data.deleteSchool).to.have.property('address')
                expect(res.body.data.deleteSchool).to.have.property('city')
                expect(res.body.data.deleteSchool).to.have.property('zipcode')
                return done()
            }
        })
    })
    it('deletes a new art in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { deleteArt(id: 6) { id, category, school_id, price, sold, title, artist_name, description, date_posted } }'})
        .end((err, res) => {
            if (err) {
                console.log('error in deleting a newly added art', err)
                return done()
            } else {
                console.log('complete', res.body.data.deleteArt)
                expect(res.body.data.deleteArt).to.have.property('id')
                expect(res.body.data.deleteArt).to.have.property('category')
                expect(res.body.data.deleteArt).to.have.property('school_id')
                expect(res.body.data.deleteArt).to.have.property('price')
                expect(res.body.data.deleteArt).to.have.property('sold')
                expect(res.body.data.deleteArt).to.have.property('title')
                expect(res.body.data.deleteArt).to.have.property('artist_name')
                expect(res.body.data.deleteArt).to.have.property('description')
                expect(res.body.data.deleteArt).to.have.property('date_posted')
                return done()
            }
        })
    })
    it('deletes a new image in the database', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { deleteImage(id: 11) {id, image_url, art_id} }'})
        .end((err, res) => {
            if (err) {
                console.log('error in deleting a newly added image', err)
                return done()
            } else {
                //console.log('complete', res.body.data.deleteImage)
                expect(res.body.data.deleteImage).to.have.property('id')
                expect(res.body.data.deleteImage).to.have.property('image_url')
                expect(res.body.data.deleteImage).to.have.property('art_id')
                return done()
            }
        })
    })
})

describe('It sends messages through a contact form', () => {
    it('gets back the data we send through the contact form', (done) => {
        request.post('/graphql')
        .send({query: 'mutation { sendMail(sendto: "myemail@myemail.com", name: "Test User", subject: "Test", fromUser: "notmyemail@myemail.com", message: "This is only a test") {sendto, name, subject, fromUser, message}}'})
        .end((err, res) => {
            if (err) {
                console.log('error in sending an email', err)
                return done()
            } else {
                console.log('complete', res.body)
                return done()
            }
        })
    })
})
