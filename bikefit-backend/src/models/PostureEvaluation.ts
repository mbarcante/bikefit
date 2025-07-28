import { DataTypes, Model } from 'sequelize';
import sequelize from '@/config/database';
import { IPostureEvaluation } from '@/interfaces';

export class PostureEvaluation extends Model<IPostureEvaluation> implements IPostureEvaluation {
  public id!: number;
  public userId!: number;
  public clientId!: number;
  public evaluationDate!: Date;
  public additionalInformation?: string;

  //Posture Angles
  public leftQAngle?: number;
  public rightQAngle?: number;
  public leftHipFlexion?: number;
  public rightHipFlexion?: number;
  public leftForefootRotation?: number;
  public rightForefootRotation?: number;
  public leftRearfootRotation?: number;
  public rightRearfootRotation?: number;

  //Posture Anthropometry
  public leftLegLength?: number;
  public rightLegLength?: number;
  public weberBarstowTest?: string;
  public allisGaleazziTest?: string;
  public inseam!: number;
  public trunkAnthropometry?: number;
  public upperLimbAnthropometry?: number;
  public shoulderAnthropometry?: number;
  public heightAnthropometry?: number;
  public ischialTuberosityWidth?: number;
  public headCircumferenceAnthropometry?: number;
  public weightAnthropometry?: number;

  //Posture Perimetry
  public leftThighCircumference8cm?: number;
  public leftThighCircumference15cm?: number;
  public leftThighCircumference23cm?: number;
  public rightThighCircumference8cm?: number;
  public rightThighCircumference15cm?: number;
  public rightThighCircumference23cm?: number;
  public leftCalfCircumference15cm?: number;
  public rightCalfCircumference15cm?: number;

  //Posture Visual Analyses
  public headAnteriorView!: string;
  public headProfileView!: string;
  public cervicalProfileView!: string;
  public shoulderAnteriorView!: string;
  public shoulderProfileView!: string;
  public elbowProfileView!: string;
  public thoracicProfileView!: string;
  public lumbarProfileView!: string;
  public pelvisAnteriorView!: string;
  public pelvisProfileView!: string;
  public kneeAnteriorView!: string;
  public kneeProfileView!: string;
  public ankleProfileView!: string;
  public footProfileView!: string;
  public thoracicHumpPosteriorView!: string;

  // Foot Measurements
  public shoeSize?: number;
  public leftFootSize?: number;
  public rightFootSize?: number;

  //Posture Special Tests
  public stiborTestBefore?: number;
  public stiborTestAfter?: number;
  public schoberTestBefore?: number;
  public schoberTestAfter?: number;
  public thomasTestRight?: number;
  public thomasTestLeft?: number;
  public elyTestRight?: number;
  public elyTestLeft?: number;
  public plankTestResult?: string;
  public clarkeTestRight?: number;
  public clarkeTestLeft?: number;
  public adamsTestPositive?: number;
  public adamsTestNegative?: number;
  public nobleTestRight?: number;
  public nobleTestLeft?: number;
  public bonnetTestRight?: number;
  public bonnetTestLeft?: number;
  public lasegueTestLeft?: number;
  public lasegueTestRight?: number;
  public threeFingerToGroundTest?: number;
  public singleLegSquatLeft?: number;
  public singleLegSquatRight?: number;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PostureEvaluation.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "Id"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "UsuarioId",
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "ClienteId",
  },
  evaluationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "DtAvaliacao"
  },
  additionalInformation: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: "InformacoesAdicionais"
  },

  //Posture Angle
  leftQAngle: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AnguloQMIE"
  },
  rightQAngle: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AnguloQMID"
  },
  leftHipFlexion: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "FlexaoCoxoFemuralMIE"
  },
  rightHipFlexion: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "FlexaoCoxoFemuralMID"
  },
  leftForefootRotation: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AvRotacaoAntePeE"
  },
  rightForefootRotation: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AvRotacaoAntePeD"
  },
  leftRearfootRotation: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AvRotacaoRetroPeE"
  },
  rightRearfootRotation: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AvRotacaoRetroPeD"
  },

  //Posture Anthropometry

  leftLegLength: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "CompMMII_MIE"
  },
  rightLegLength: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "CompMMII_MID"
  },
  weberBarstowTest: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: "CompMMII_WeberBarstow"
  },
  allisGaleazziTest: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: "CompMMII_AllisGaleazzi"
  },
  inseam: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false,
    field: "AntropometriaCavalo"
  },
  trunkAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaTronco"
  },
  upperLimbAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaMSuperior"
  },
  shoulderAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaOmbro"
  },
  heightAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaEstatura"
  },
  ischialTuberosityWidth: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaDETI"
  },
  headCircumferenceAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaPerCefalico"
  },
  weightAnthropometry: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "AntropometriaPeso"
  },

  //Posture Perimetry
  leftThighCircumference8cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMIE8"
  },
  leftThighCircumference15cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMIE15"
  },
  leftThighCircumference23cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMIE23"
  },
  rightThighCircumference8cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMID8"
  },
  rightThighCircumference15cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMID15"
  },
  rightThighCircumference23cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaCoxaMID23"
  },
  leftCalfCircumference15cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaPernaMIE15"
  },
  rightCalfCircumference15cm: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "PerimetriaPernaMID15"
  },

  //Posture Visual Analyses
  headAnteriorView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaAnteriorCabeca"
  },
  headProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilCabeca"
  },
  cervicalProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilCervical"
  },
  shoulderAnteriorView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaAnteriorOmbro"
  },
  shoulderProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilOmbro"
  },
  elbowProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilCotovelo"
  },
  thoracicProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilToracica"
  },
  lumbarProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilLombar"
  },
  pelvisAnteriorView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaAnteriorPelve"
  },
  pelvisProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilPelve"
  },
  kneeAnteriorView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaAnteriorJoelho"
  },
  kneeProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilJoelho"
  },
  ankleProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilAttars"
  },
  footProfileView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPerfilPe"
  },
  thoracicHumpPosteriorView: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: "VistaPosteriorGibaToracica"
  },

  //Foot Measurements
  shoeSize: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "NumeroCalcado"
  },
  leftFootSize: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TamanhoPeEsquerdo"
  },
  rightFootSize: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TamanhoPeDireito"
  },

  //Posture Special Tests
  stiborTestBefore: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialEstiborAntes"
  },
  stiborTestAfter: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialEstiborDepois"
  },
  schoberTestBefore: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialSchoberAntes"
  },
  schoberTestAfter: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialSchoberDepois"
  },
  thomasTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialThomasD"
  },
  thomasTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialThomasE"
  },
  elyTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialElyD"
  },
  elyTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialElyE"
  },
  plankTestResult: {
    type: DataTypes.STRING(5),
    allowNull: true,
    field: "TesteEspecialPlenk"
  },
  clarkeTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialClarkeD"
  },
  clarkeTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialClarkeE"
  },
  adamsTestPositive: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialAdamsP"
  },
  adamsTestNegative: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialAdamsN"
  },
  nobleTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialNobleD"
  },
  nobleTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialNobleE"
  },
  bonnetTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialBonnetD"
  },
  bonnetTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialBonnetE"
  },
  lasegueTestLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialLasegueE"
  },
  lasegueTestRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialLasegueD"
  },
  threeFingerToGroundTest: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialTresDedoSolo"
  },
  singleLegSquatLeft: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialSingleLegSquatE"
  },
  singleLegSquatRight: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
    field: "TesteEspecialSingleLegSquatD"
  },

}, {
  sequelize,
  tableName: "AvaliacoesPosturais",
  modelName: "PostureEvaluation",
  timestamps: true,
  createdAt: "DtCadastro",
  updatedAt: "DtAtualizacao",
});