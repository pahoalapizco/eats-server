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
        body.data.addRestaurant.should.be.an('object')
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
        body.data.addCategoria.should.be.an('object')
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
        body.data.should.have.property('getCategoria').with.lengthOf(1)
        done(err);
      }
    );
  });
});

describe('[PLATILLOS]', () => {
  test('Debe agregar un platillo', (done) => {
    const json = {
      query:
        "mutation($data:PlatilloInput){ addPlatillo(data:$data){ _id, name } }",
      variables: {
        data: {
          name: "Platillo test",
          description: "Descripcion de platillo test",
          price: 20,
          restaurant: restauranteID,
          categoria: categoriaID
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
        expect(body.data.addPlatillo._id).not.toBeNull();
        body.data.addPlatillo.should.be.an('object')
        platilloID = body.data.addPlatillo._id;
        done(err);
      }
    );
  })
  test('Debe regresar un arreglo de platillos', (done) => {
    const json = {
      query: "{ getPlatillos { _id, name } }"
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
        expect(body.data.getPlatillos).not.toBeNull();
        body.data.should.have.property('getPlatillos').with.lengthOf(1)
        done(err);
      }
    );
  })
  test('Debe regresar un obteto Platilo', (done) => {
    const json = {
      query: "query($platilloID:ID){ getPlatillo(platilloID:$platilloID){ _id, name } }",
      variables: {
        platilloID
      }
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
        expect(body.data.getPlatillo).not.toBeNull();
        body.data.getPlatillo.should.be.an('object')
        done(err);
      }
    );
  })
})

describe('[PEDIDOS]', () => {
  test('Debe registrar un pedido', (done) => {
    const json = {
      query:
        "mutation($data:PedidoInput){ addPedido(data:$data){ _id, detail { platillo {_id} } } }",
      variables: {
        data: {
          restaurant: restauranteID,
          total: 20,
          address: "una direccion test",
          metodoPago: 'Efectivo',
          detail: {
            platillo: platilloID,
            cantidad: 1,
            importe: 20
          }
        }
      }
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
        expect(body.data.addPedido._id).not.toBeNull();
        body.data.addPedido.should.be.an('object')
        body.data.addPedido.should.have.property('detail').with.lengthOf(1)
        pedidoID = body.data.addPedido._id;
        done(err);
      }
    );
  })
  test('Debe obtener un arreglo de pedidos', (done) => {
    const json = {
      query: "{ getPedidos { _id } }",
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
        expect(body.data.getPedidos).not.toBeNull();
        body.data.should.have.property('getPedidos').with.lengthOf(1)
        // body.data.getPedidos[0].should.have.property('detail').with.lengthOf(1)
        done(err);
      }
    );
  })
})