process.env.DB_ENV = 'testing'

const chai = require('chai')
const expect = chai.expect;
const url = 'http://localhost:4000'
const request = require('supertest')(url)

describe('Getting the database server message', () => {
    it('returns the server message', (done) => {
        request.get('/')
        .end((err, res) => {
            if (err) {
                console.log('error in getting database server message', err)
                return done()
            } else {
                //console.log('complete', res.text)
                return done()
            }
        })
    })
})
