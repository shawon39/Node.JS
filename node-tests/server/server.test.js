const request = require('supertest');
const expect = require('expect');

var app = require('./server').app; // server.js

describe('Server', () => {

    describe('GET/', () => {
        it('Should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                //.expect({
                //  error: 'Page not found.'
                //})
                //.expect('Hello world!')
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        //error: 'Page not found.'
                        name: 'Todo app'
                    });
                })
                .end(done);
        });
    });

    describe('GET/user', () => {

        it('Should return user info', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body[1]).toMatchObject({
                        name: 'jebin',
                        age: 24
                    });
                })
                .end(done);
        });

    });

});







//
