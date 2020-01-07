process.env.DB_ENV = 'testing'

const chai = require('chai')
const expect = chai.expect;
const url = 'http://localhost:4000'
const request = require('supertest')(url)

// describe('It resets the database', () => {
//   beforeEach( () => {
//       db('schools').truncate()
//       request.post('/graphql')
//       .send({query: 'mutation { addSchool (school_id: "123abc456def789ghi", school_name: "West High School", email: "test-email@example.com", address: "123 West St", city: "Westtown", zipcode: "12345"'})
//       .end((err, res) => {
//           if (err) {
//               console.log('error in resetting tables', err)
//               return done()
//           } else {
//               return done()
//           }
//       })
//   })
// })

describe('Querying all by each table', () => {
  it('gets all schools', (done) => {
    request.post('/graphql')
    .send({query: '{allSchools {id, school_id, school_name, email, address, city, zipcode} }'})
    .end((err, res) => {
      if (err) {
        console.log('error in all schools', err)
        return done()
      } else {
        //console.log('complete', res.body.data.allSchools)
        expect(res.body.data.allSchools).to.have.lengthOf(1)
        return done()
      }
    })
  })
  it('gets all images', (done) => {
    request.post('/graphql')
    .send({query: '{allImages {id, image_url, art_id}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in all images', err)
        return done()
      } else {
        //console.log('complete', res.body.data.allImages)
        expect(res.body.data.allImages).to.have.lengthOf(10)
        return done()
      }
    })
  })
  it('gets all arts', (done) => {
    request.post('/graphql')
    .send({query: '{allArts {id, category, school_id, price, sold, title, artist_name, description, date_posted}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in all arts', err)
        return done()
      } else {
        //console.log('complete', res.body.data.allArts)
        expect(res.body.data.allArts).to.have.lengthOf(5)
        return done()
      }
    })
  })
  it('gets all categories', (done) => {
    request.post('/graphql')
    .send({query: '{allCategories {id, category}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in all categories', err)
        return done()
      } else {
        //console.log('complete', res.body.data.allCategories)
        expect(res.body.data.allCategories).to.have.lengthOf(5)
        return done()
      }
    })
  })
})

describe('Querying each item by its id', () => {
  it('gets a category by its id', (done) => {
    request.post('/graphql')
    .send({query: '{category (id: 1){id, category}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in category by id', err)
        return done()
      } else {
        //console.log('complete', res.body.data.category)
        expect(res.body.data.category).to.have.property('id')
        expect(res.body.data.category).to.have.property('category')
        return done()
      }
    })
  })
  it('gets a school by its id', (done) => {
    request.post('/graphql')
    .send({query: '{school (id: 1){id, school_id, school_name, email, address, city, zipcode}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in school by id', err)
        return done()
      } else {
        //console.log('complete', res.body.data.school)
        expect(res.body.data.school).to.have.property('id')
        expect(res.body.data.school).to.have.property('school_id')
        expect(res.body.data.school).to.have.property('school_name')
        expect(res.body.data.school).to.have.property('email')
        expect(res.body.data.school).to.have.property('address')
        expect(res.body.data.school).to.have.property('city')
        expect(res.body.data.school).to.have.property('zipcode')
        return done()
      }
    })
  })
  it('gets a school by its school id', (done) => {
    request.post('/graphql')
    .send({query: `{schoolBySchoolId (school_id: "123abc456def789ghi"){id, school_id, school_name, email, address, city, zipcode}}`})
    .end((err, res) => {
      if (err) {
        console.log('error in school by school id', err)
        return done()
      } else {
        //console.log('complete', res.body)
        expect(res.body.data.schoolBySchoolId).to.have.property('id')
        expect(res.body.data.schoolBySchoolId).to.have.property('school_id')
        expect(res.body.data.schoolBySchoolId).to.have.property('school_name')
        expect(res.body.data.schoolBySchoolId).to.have.property('email')
        expect(res.body.data.schoolBySchoolId).to.have.property('address')
        expect(res.body.data.schoolBySchoolId).to.have.property('city')
        expect(res.body.data.schoolBySchoolId).to.have.property('zipcode')
        return done()
      }
    })
  })
  it('gets an art by its id', (done) => {
    request.post('/graphql')
    .send({query: '{art (id: 1){id, category, school_id, price, sold, title, artist_name, description, date_posted, images {image_url}}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in art by id', err)
        return done()
      } else {
        //console.log('complete', res.body)
        expect(res.body.data.art).to.have.property('id')
        expect(res.body.data.art).to.have.property('category')
        expect(res.body.data.art).to.have.property('school_id')
        expect(res.body.data.art).to.have.property('price')
        expect(res.body.data.art).to.have.property('sold')
        expect(res.body.data.art).to.have.property('title')
        expect(res.body.data.art).to.have.property('artist_name')
        expect(res.body.data.art).to.have.property('description')
        expect(res.body.data.art).to.have.property('date_posted')
        expect(res.body.data.art).to.have.property('images')
        return done()
      }
    })
  })
  it('gets an art by its school', (done) => {
    request.post('/graphql')
    .send({query: '{artBySchool (school_id: 1) {id, category, school_id, price, sold, title, artist_name, description, date_posted, images {image_url}}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in art by school id', err)
        return done()
      } else {
        //console.log('complete', res.body)
        expect(res.body.data.artBySchool[0]).to.have.property('id')
        expect(res.body.data.artBySchool[0]).to.have.property('category')
        expect(res.body.data.artBySchool[0]).to.have.property('school_id')
        expect(res.body.data.artBySchool[0]).to.have.property('price')
        expect(res.body.data.artBySchool[0]).to.have.property('sold')
        expect(res.body.data.artBySchool[0]).to.have.property('title')
        expect(res.body.data.artBySchool[0]).to.have.property('artist_name')
        expect(res.body.data.artBySchool[0]).to.have.property('description')
        expect(res.body.data.artBySchool[0]).to.have.property('date_posted')
        expect(res.body.data.artBySchool[0]).to.have.property('images')
        return done()
      }
    })
  })
  it('gets an image by its id', (done) => {
    request.post('/graphql')
    .send({query: '{image (id: 1){id, image_url, art_id}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in image by its id', err)
        return done()
      } else {
        //console.log('complete', res.body)
        expect(res.body.data.image).to.have.property('id')
        expect(res.body.data.image).to.have.property('image_url')
        expect(res.body.data.image).to.have.property('art_id')
        return done()
      }
    })
  })
  it('gets an image by the art id', (done) => {
    request.post('/graphql')
    .send({query: '{imageByArt (art_id: 1) {id, image_url, art_id}}'})
    .end((err, res) => {
      if (err) {
        console.log('error in image by its art id', err)
        return done()
      } else {
        //console.log('complete', res.body.data.imageByArt)
        expect(res.body.data.imageByArt[0]).to.have.property('id')
        expect(res.body.data.imageByArt[0]).to.have.property('image_url')
        expect(res.body.data.imageByArt[0]).to.have.property('art_id')
        return done()
      }
    })
  })
})
