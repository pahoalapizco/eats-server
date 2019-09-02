const should = require("chai").should();

const request = require("request");
require("../index");
require("isomorphic-fetch");

const HOST = "http://localhost:5000/graphql";

// Variables para _id's que se requieren en test posteriores,
let token, restauranteID, categoriaID, platilloID, repartidorID, pedidoID;

describe("[USUARIOS]", () => {
  test("Crear usuario", done => {
    const json = {
      query: "mutation($data:UserInput){ addUser(data:$data){ token } }",
      variables: {
        data: {
          name: "user test",
          lastname: "jest test",
          email: "test.test",
          password: "123",
          phonenumber: "123456890"
        }
      }
    };

    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.addUser.token).not.toBeNull();        
        body.data.token.should.be.a('string')
        done(err);
      }
    );
  });

  test("Usuario creado inicia sesión", done => {
    const json = {
      query:
        "mutation($email:String, $password:String){ login(email:$email, password:$password){ token } }",
      variables: {
        email: "test.test",
        password: "123"
      }
    };

    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.login.token).not.toBeNull();        
        // body.data.token.should.be.a('string')
        token = body.data.login.token;
        done(err);
      }
    );
  });

  test("Debe obtener al usuario en sesión", done => {
    const json = {
      query: "{ getUser { name, lastname } }"
    };

    request.post(
      {
        url: HOST,
        json,
        headers: {
          Authorization: token
        }
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.getUser).not.toBeNull();
        // body.data.should.have.property('getUser').with.lengthOf(1)
        done(err);
      }
    );
  });
});

describe("[REPARTIDORES]", () => {
  test("Debe crear un repartidor", done => {
    const json = {
      query:
        "mutation($data:RepartidorInput){ addRepartidor(data:$data){ _id, vehiculo } }",
      variables: {
        data: {
          name: "user test",
          lastname: "jest test",
          phonenumber: "123456890"
        }
      }
    };
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.addRepartidor).not.toBeNull();
        expect(body.data.addRepartidor.vehiculo).toBe("Motocicleta");
        body.data.addRepartidor.should.be.an('object')
        repartidorID = body.data.addRepartidor._id;
        done(err);
      }
    );
  });
  test('Debe obtener un arreglo de repartidores', (done) => {
    const json = {
      query: "{ getRepartidores { _id, name }}"
    }
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.getRepartidores).not.toBeNull();
        body.data.should.have.property('getRepartidores').with.lengthOf(1)
        done(err);
      }
    );
  })
});

describe("[RESTAURANTES]", () => {
  test("Debe crear un restaurante", done => {
    const json = {
      query:
        "mutation($data:RestaurantInput){ addRestaurant(data:$data){ _id, name } }",
      variables: {
        data: {
          name: "restaurant test",
          address: "address test",
          open: "10:00",
          closed: "18:00",
          phonenumber: "123456890"
        }
      }
    };
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.addRestaurant._id).not.toBeNull();
        // body.data.addRestaurant.should.be.an('object')
        restauranteID = body.data.addRestaurant._id;
        done(err);
      }
    );
  });

  test("Debe obtener un arreglo de restaurantes", done => {
    const json = {
      query: "{ getRestaurants { _id, name } }"
    };
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.getRestaurants).not.toBeNull();
        // expect(body.data.getRestaurants.length).toBe(1);
        body.data.should.have.property('getRestaurants').with.lengthOf(1)
        done(err);
      }
    );
  });
});

describe("[CATEGORIAS]", () => {
  test("Crear categoria", done => {
    const json = {
      query:
        "mutation($data:CategoriaInput){ addCategoria(data:$data){ _id, name } }",
      variables: {
        data: {
          name: "categoria test"
        }
      }
    };
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.addCategoria._id).not.toBeNull();
        // body.data.addCategoria.should.be.an('object')
        categoriaID = body.data.addCategoria._id;
        done(err);
      }
    );
  });
  test("Debe obtener un arrego de categorias", done => {
    const json = {
      query: "{ getCategoria { _id, name } }"
    };
    request.post(
      {
        url: HOST,
        json
      },
      function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).toBe(200);
        body.should.have.property("data");
        expect(body.data.getCategoria).not.toBeNull();
        expect(body.data.getCategoria.length).toBe(1);
        // body.data.should.have.property('getCategoria').with.lengthOf(1)
        done(err);
      }
    );
  });
});
