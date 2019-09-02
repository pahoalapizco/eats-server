
const should = require('chai').should();

const request = require('request');
require('../index');
require('isomorphic-fetch');

const HOST = 'http://localhost:5000/graphql';
let token;

function clearDataBase() {
  console.log('Limpiando DATABASE');
  return new Promise(resolve => {
    let count = 0;
    const max = Object.keys(mongoose.connection.collections).length;
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function () {
        count++;
        if (count >= max) {
          resolve();
        }
      })
    }
  });
}

describe('Server ON', () => {
  beforeAll(function (done) {
    clearDataBase()
      .then(() => done())
      .catch(() => done());
  })

  test('Crear usuario', (done) => {
    const json = {
      query: "mutation($data:UserInput){ addUser(data:$data){ token } }",
      variables: {
        "data": {
          "name": "user test",
          "lastname": "jest test",
          "email": "test.test",
          "password": "123",
          "phonenumber": "123456890"
        }
      }
    }
    
    request.post({
      url: HOST,
      json
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      expect(body.data.addUser.token).not.toBeNull()
      token = body.data.addUser.token;
      done(err);
    })
  })
  

});
