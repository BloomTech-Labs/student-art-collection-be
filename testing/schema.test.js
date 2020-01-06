process.env.DB_ENV = 'testing'

const chai = require('chai')
const expect = chai.expect;
const url = 'http://localhost:4000'
const request = require('supertest')(url)

describe('GraphQL', () => {
  it('gets all schools', (done) => {
    request.post('/graphql')
    .send({query: '{allSchools {id, school_id, school_name, email, address, city, zipcode} }'})
    .end((err, res) => {
      if (err) {
        console.log('error', err)
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
        console.log('error', err)
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
        console.log('error', err)
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
        console.log('error', err)
        return done()
      } else {
        console.log('complete', res.body.data.allCategories)
        return done()
      }
    })
  })
})
