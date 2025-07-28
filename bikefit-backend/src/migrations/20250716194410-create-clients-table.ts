import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("Clientes", {
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
      Nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Sexo: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      DtNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      Profissao: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      Celular: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      Observacoes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "DtCadastro",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "DtAtualizacao",
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("Clientes");
  },
};
