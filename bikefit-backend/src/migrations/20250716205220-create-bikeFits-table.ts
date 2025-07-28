import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable("BikeFits", {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UsuárioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Usuarios",
          key: "Id",
        },
      },
      AvaliacaoPosturalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "AvaliacoesPosturais",
          key: "Id",
        },
        onDelete: "CASCADE",
      },
      BikeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Bikes",
          key: "Id",
        },
        onDelete: "CASCADE",
      },
      ObjetivoCurtoPrazo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ObjetivoLongoPrazo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      MesaAlturaAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      MesaAlturaDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      MesaTamanhoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      MesaTamanhoImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      MesaTamanhoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      MesaTamanhoImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      MesaInclinacaoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      MesaInclinacaoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimComprimentoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimComprimentoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimLarguraAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimLarguraDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimInclinacaoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      SelimInclinacaoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoLarguraAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoLarguraDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoRiseAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoRiseDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoReachAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoReachDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoDropAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      GuidaoDropDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CanotTamanhoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CanotTamanhoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CanotOffsetAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CanotOffsetDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloTroncoMembroSuperiorAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloTroncoMembroSuperiorImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloTroncoMembroSuperiorDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloTroncoMembroSuperiorImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoTroncoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloFlexaoTroncoImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoTroncoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      AnguloFlexaoTroncoImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoCotoveloAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloFlexaoCotoveloImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoCotoveloDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      AnguloFlexaoCotoveloImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloRecuoOmbroCotoveloAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloRecuoOmbroCotoveloImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloRecuoOmbroCotoveloDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloRecuoOmbroCotoveloImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoJoelhoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloFlexaoJoelhoImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoJoelhoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      AnguloFlexaoJoelhoImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoPlantaAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloFlexaoPlantaImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloFlexaoPlantaDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      AnguloFlexaoPlantaImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloDorsiFlexaoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloDorsiFlexaoImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      AnguloDorsiFlexaoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      AnguloDorsiFlexaoImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      VideoAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      VideoDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      KopsAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      KopsImagemAntes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      KopsDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      KopsImagemDepois: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      PeDeVelaTamanhoAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PeDeVelaTamanhoDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PeDeVelaQFactorAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PeDeVelaQFactorDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      ObservacaoAntes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ObservacaoDepois: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      InformacoesAdicionais: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    await queryInterface.dropTable("BikeFits");
  },
};
