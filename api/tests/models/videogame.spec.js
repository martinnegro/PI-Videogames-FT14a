const { Videogame, Genre, conn } = require('../../src/db.js');
const { expect } = require('chai');

const { v4: uuidv4 } = require('uuid')


const vg = Videogame.create({ name: 'The best game', description: 'A great game', id: uuidv4() })

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {

    describe('name', () => {
      const withError = { name: null, description: 'A great game', id: uuidv4() };
      const withoutError = { name: 'The best game', description: 'A great game', id: uuidv4() };
      it('should throw an error if name is null', (done) => {
        Videogame.create(withError)
          .then(() => done(new Error('It must throw an error')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create(withoutError)
          .then((result) => {
            done(result)
          });
      });
      it('should accept Genres associations', () => {
        vg.addGenre(['1', '5'])
          
      });
    });
  });
});



