process.env.DB_ENV = 'testing';

const chai = require('chai')
const expect = chai.expect;
const url = 'http://localhost:4000'
const request = require('supertest')(url)

describe('It adds items to the database', () => {
    it('adds a new school', (done) => {
        request.post('/graphql')
        .send('')
    })
})