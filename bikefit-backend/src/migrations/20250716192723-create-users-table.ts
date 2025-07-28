import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {

    await queryInterface.createTable('Usuarios', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'DtCadastro',
      },
      updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'DtAtualizacao',
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Usuarios');
  }
};
