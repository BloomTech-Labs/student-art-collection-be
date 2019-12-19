const request = require('supertest')

const server = require('./index.js')

describe('This is to make sure we are using the testing env', () => {
    it('makes sure we are running in a test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})