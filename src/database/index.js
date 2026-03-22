const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');
//cada um desses acima é uma tabela

const models = [User, Category, Product, ProductImage, ProductOption];
//representação das tabelas que estão no DB

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    // Inicializa todos os modelos passando a conexão
    models.forEach(model => model.init(this.connection));

    // Chama o método 'associate' apenas nos modelos que o possuem
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

module.exports = new Database();