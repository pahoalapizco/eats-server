"use strict";

var NODE_ENV = process.env.NODE_ENV || "dev";
var ENVS = {
  dev: {
    SECRET: 'MySecretValue',
    PORT: 5000,
    DATABASE: 'mongodb+srv://curso:Curso1234@cluster0-lb65t.mongodb.net/eats?retryWrites=true&w=majority',
    CLOUD_NAME: 'dmwsbri4c',
    API_KEY: '185419712655835',
    API_SECRET: 'Wo8ftZh_Izdu037wj1HoUWwbUyo'
  },
  test: {
    SECRET: 'MySecretValue',
    PORT: 5000,
    DATABASE: 'mongodb+srv://curso:Curso1234@cluster0-lb65t.mongodb.net/dbtest?retryWrites=true&w=majority',
    CLOUD_NAME: 'dmwsbri4c',
    API_KEY: '185419712655835',
    API_SECRET: 'Wo8ftZh_Izdu037wj1HoUWwbUyo'
  },
  production: {
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
  }
};
module.exports = ENVS[NODE_ENV];
//# sourceMappingURL=index.js.map