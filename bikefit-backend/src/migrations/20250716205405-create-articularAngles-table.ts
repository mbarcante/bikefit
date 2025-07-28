import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable("AngulosArticulares", {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      Tipo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      StatusCiclista: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      AnguloTroncoMembroSuperiorMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloTroncoMembroSuperiorMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoTroncoMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoTroncoMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoCotoveloMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoCotoveloMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloRecuoOmbroCotoveloMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloRecuoOmbroCotoveloMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoJoelhoMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoJoelhoMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoPlantaMin: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloFlexaoPlantaMax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloDorsiFlexaoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AnguloDorsiFlexaoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      KopsAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      KopsDepois: {
        type: DataTypes.DECIMAL(18, 2),
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
    await queryInterface.dropTable("AngulosArticulares");
  },
};
