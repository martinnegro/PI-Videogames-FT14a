/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');

const testSession = session(app)

const invalidPost = { name: 'The Bad Game'}
const validPost   = { name: 'The Good Game', description: 'A fairly good game', released: 'Always', rating: 5, imgUrl: 'http://', genres: [1, 51], platforms: [1] }
let id;

xdescribe('RUTA /videogame', function() {
  describe('POST', function() {
    it('should responds with 400 if missing parameters', function(done) {
      testSession.post('/videogame')
        .send(invalidPost)
        .expect(400)
        .end(done)
    });
    it('should responds with 200 if post is valid', function(done) {
      testSession.post('/videogame')
        .send(validPost)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(_err, res){
          id = res.body.id
          done()
        });
    });
  });
  describe('GET', function() {
    it('should responds with 400 if no id', function(done) {
      testSession.get('/videogame/')
        .expect(400)
        .end(done)
    });
    it('should reponds with 404 if wrong id', function(done) {
      testSession.get('/videogame/333')
        .expect(404)
        .end(done)
    });
    it('should responds with 200 and a valid object for a valid id', function(done) {
      testSession.get(`/videogame/${id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(_err, res) {
          expect(res.body).to.include.keys('platforms','genres')
          done()
        })
    });
  })
});  

