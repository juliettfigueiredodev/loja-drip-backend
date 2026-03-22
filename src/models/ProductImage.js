const { Model, DataTypes } = require('sequelize');

class ProductImage extends Model {
  static init(sequelize) {
    super.init({
      enabled: { type: DataTypes.BOOLEAN, defaultValue: true },
      path: { type: DataTypes.STRING, allowNull: false }, // guarda o caminho de onde a imagem está
    }, {
      sequelize,
      tableName: 'imagens_produtos', //definição do nome da tabela
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  } //belongsTo = relacionamento 1:1
}

module.exports = ProductImage;