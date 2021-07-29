const { Videogame, Genre, conn } = require('../../src/db.js');
const { expect } = require('chai');

const { v4: uuidv4 } = require('uuid')




describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {

    describe('name', () => {
      const withError = { name: null, description: 'A great game', id: uuidv4()};
      const withoutUUID = { name: 'The best game', description: 'A great game', id: 14 };
      const withoutDescription = { name: 'The best game', description: null, id: uuidv4() };
      const withoutError = { name: 'The best game', description: 'A great game', id: uuidv4() };
      it('should throw an error if name is null', (done) => {
        Videogame.create(withError)
          .then(() => done(new Error('It must throw an error')))
          .catch(() => done());
      });
      it('should throw an error if description is null', () => {
        Videogame.create(withoutDescription)
          .then(() => done(new Error('It must throw an error')))
          .catch(() => done())
      })
      it('should throw an error if id is not uuid', () => {
        Videogame.create(withoutUUID)
          .then(() => done(new Error('It must throw an error')))
          .catch(()=> done())
      })
      it('should work when its name and id are valid', async function(done){
        await Videogame.create(withoutError)
                    .then(done())
                    .catch()
      });
      // describe('Genre association', async () => {
      //   const vg = await Videogame.findByPk(withoutError.id);
      //   it('should accept association',()=> {
      //     vg.addGenre([1, 2])
      //       .then(() => done())
      //       .catch()
      //   })   
      // })
    });
  });
});



