import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable("AvaliacoesPosturais", {
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
      ClienteId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Clientes",
          key: "Id",
        },
        onDelete: "SET NULL",
      },
      DtAvaliacao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      InformacoesAdicionais: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      // Posture Angles
      AnguloQMIE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AnguloQMID: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      FlexaoCoxoFemuralMIE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      FlexaoCoxoFemuralMID: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AvRotacaoAntePeE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AvRotacaoAntePeD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AvRotacaoRetroPeE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AvRotacaoRetroPeD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      // Posture Anthropometry
      CompMMII_MIE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CompMMII_MID: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      CompMMII_WeberBarstow: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      CompMMII_AllisGaleazzi: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      AntropometriaCavalo: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
      },
      AntropometriaTronco: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaMSuperior: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaOmbro: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaEstatura: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaDETI: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaPerCefalico: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      AntropometriaPeso: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      // Posture Perimetry
      PerimetriaCoxaMIE8: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaCoxaMIE15: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaCoxaMIE23: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaCoxaMID8: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaCoxaMID15: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaCoxaMID23: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaPernaMIE15: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      PerimetriaPernaMID15: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      // Posture Visual Analyses
      VistaAnteriorCabeca: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilCabeca: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilCervical: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaAnteriorOmbro: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilOmbro: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilCotovelo: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilToracica: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilLombar: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaAnteriorPelve: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilPelve: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaAnteriorJoelho: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilJoelho: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilAttars: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPerfilPe: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      VistaPosteriorGibaToracica: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },

      // Foot Measurements
      NumeroCalcado: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      TamanhoPeEsquerdo: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TamanhoPeDireito: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },

      // Posture Special Tests
      TesteEspecialEstiborAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialEstiborDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialSchoberAntes: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialSchoberDepois: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialThomasD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialThomasE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialElyD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialElyE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialPlenk: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      TesteEspecialClarkeD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialClarkeE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialAdamsP: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialAdamsN: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialNobleD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialNobleE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialBonnetD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialBonnetE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialLasegueE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialLasegueD: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialTresDedoSolo: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialSingleLegSquatE: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
      },
      TesteEspecialSingleLegSquatD: {
        type: DataTypes.DECIMAL(18, 2),
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
    await queryInterface.dropTable("AvaliacoesPosturais");
  },
};
