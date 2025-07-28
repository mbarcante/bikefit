import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable("Aros", {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      Tamanho: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropTable("Aros");
  },
};
