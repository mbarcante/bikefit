import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable("Bikes", {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      UsuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Usuarios",
          key: "Id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      ClienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Clientes",
          key: "Id",
        },
        onDelete: "CASCADE",
      },
      Tipo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Tamanho: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      Marca: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Modelo: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      Ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Aro: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Quadro: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      DtCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      DtAtualizacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropTable("Bikes");
  },
};
