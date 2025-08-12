import { DataTypes, Model } from 'sequelize';
import sequelize from '@/config/database';
import { IBikeFit, IBikeFitCreationAttributes } from '@/interfaces/IBikeFit';

export class BikeFit extends Model<IBikeFit, IBikeFitCreationAttributes> implements IBikeFit {
  // Propriedades que correspondem à interface IBikeFit
  public id!: number;
  public postureAvaliationId!: number;
  public bikeId!: number;
  public userId?: number;

  // Campos opcionais (usar '?')
  public shortTermGoal?: string;
  public longTermGoal?: string;

  // Medidas da Mesa (Stem)
  public stemHeightBefore?: number;
  public stemHeightAfter?: number;
  public stemLengthBefore?: number;
  public stemLengthAfter?: number;
  public stemLengthImageBefore?: string;
  public stemLengthImageAfter?: string;
  public stemAngleBefore?: number;
  public stemAngleAfter?: number;

  // Medidas do Selim (Saddle)
  public saddleLengthBefore?: number;
  public saddleLengthAfter?: number;
  public saddleWidthBefore?: number;
  public saddleWidthAfter?: number;
  public saddleTiltBefore?: number;
  public saddleTiltAfter?: number;

  // Medidas do Guidão (Handlebar)
  public handlebarWidthBefore?: number;
  public handlebarWidthAfter?: number;
  public handlebarRiseBefore?: number;
  public handlebarRiseAfter?: number;
  public handlebarReachBefore?: number;
  public handlebarReachAfter?: number;
  public handlebarDropBefore?: number;
  public handlebarDropAfter?: number;

  // Medidas do Canote (Seatpost)
  public seatpostLengthBefore?: number;
  public seatpostLengthAfter?: number;
  public seatpostOffsetBefore?: number;
  public seatpostOffsetAfter?: number;

  // Ângulos Corporais (Body Angles)
  public trunkUpperLimbAngleBefore?: number;
  public trunkUpperLimbAngleImageBefore?: string;
  public trunkUpperLimbAngleAfter?: number;
  public trunkUpperLimbAngleImageAfter?: string;

  public trunkFlexionAngleBefore?: number;
  public trunkFlexionAngleImageBefore?: string;
  public trunkFlexionAngleAfter?: number;
  public trunkFlexionAngleImageAfter?: string;

  public elbowFlexionAngleBefore?: number;
  public elbowFlexionAngleImageBefore?: string;
  public elbowFlexionAngleAfter?: number;
  public elbowFlexionAngleImageAfter?: string;

  public shoulderElbowRecoilAngleBefore?: number;
  public shoulderElbowRecoilAngleImageBefore?: string;
  public shoulderElbowRecoilAngleAfter?: number;
  public shoulderElbowRecoilAngleImageAfter?: string;

  public kneeFlexionAngleBefore?: number;
  public kneeFlexionAngleImageBefore?: string;
  public kneeFlexionAngleAfter?: number;
  public kneeFlexionAngleImageAfter?: string;

  public plantarFlexionAngleBefore?: number;
  public plantarFlexionAngleImageBefore?: string;
  public plantarFlexionAngleAfter?: number;
  public plantarFlexionAngleImageAfter?: string;

  public dorsiflexionAngleBefore?: number;
  public dorsiflexionAngleImageBefore?: string;
  public dorsiflexionAngleAfter?: number;
  public dorsiflexionAngleImageAfter?: string;

  // K.O.P.S
  public kopsBefore?: number;
  public kopsImageBefore?: string;
  public kopsAfter?: number;
  public kopsImageAfter?: string;

  // Pedivela (Crank Arm)
  public crankArmLengthBefore?: number;
  public crankArmLengthAfter?: number;
  public crankArmQFactorBefore?: number;
  public crankArmQFactorAfter?: number;

  // Mídia de Avaliação
  public videoBefore?: string;
  public videoAfter?: string;

  // Observações e Informações Adicionais
  public observationBefore?: string;
  public observationAfter?: string;
  public additionalInformation?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BikeFit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'Id',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'UsuarioId',
    },
    postureAvaliationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'AvaliacaoPosturalId',
    },
    bikeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'BikeId',
    },
    shortTermGoal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ObjetivoCurtoPrazo',
    },
    longTermGoal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ObjetivoLongoPrazo',
    },
    stemHeightBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaAlturaAntes',
    },
    stemHeightAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaAlturaDepois',
    },
    stemLengthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaTamanhoAntes',
    },
    stemLengthImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'MesaTamanhoImagemAntes',
    },
    stemLengthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaTamanhoDepois',
    },
    stemLengthImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'MesaTamanhoImagemDepois',
    },
    stemAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaInclinacaoAntes',
    },
    stemAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'MesaInclinacaoDepois',
    },
    saddleLengthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimComprimentoAntes',
    },
    saddleLengthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimComprimentoDepois',
    },
    saddleWidthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimLarguraAntes',
    },
    saddleWidthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimLarguraDepois',
    },
    saddleTiltBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimInclinacaoAntes',
    },
    saddleTiltAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'SelimInclinacaoDepois',
    },
    handlebarWidthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoLarguraAntes',
    },
    handlebarWidthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoLarguraDepois',
    },
    handlebarRiseBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoRiseAntes',
    },
    handlebarRiseAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoRiseDepois',
    },
    handlebarReachBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoReachAntes',
    },
    handlebarReachAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoReachDepois',
    },
    handlebarDropBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoDropAntes',
    },
    handlebarDropAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'GuidaoDropDepois',
    },
    seatpostLengthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'CanotTamanhoAntes',
    },
    seatpostLengthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'CanotTamanhoDepois',
    },
    seatpostOffsetBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'CanotOffsetAntes',
    },
    seatpostOffsetAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'CanotOffsetDepois',
    },
    trunkUpperLimbAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloTroncoMembroSuperiorAntes',
    },
    trunkUpperLimbAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloTroncoMembroSuperiorImagemAntes',
    },
    trunkUpperLimbAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloTroncoMembroSuperiorDepois',
    },
    trunkUpperLimbAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloTroncoMembroSuperiorImagemDepois',
    },
    trunkFlexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoTroncoAntes',
    },
    trunkFlexionAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoTroncoImagemAntes',
    },
    trunkFlexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoTroncoDepois',
    },
    trunkFlexionAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoTroncoImagemDepois',
    },
    elbowFlexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoCotoveloAntes',
    },
    elbowFlexionAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoCotoveloImagemAntes',
    },
    elbowFlexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoCotoveloDepois',
    },
    elbowFlexionAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoCotoveloImagemDepois',
    },
    shoulderElbowRecoilAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloRecuoOmbroCotoveloAntes',
    },
    shoulderElbowRecoilAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloRecuoOmbroCotoveloImagemAntes',
    },
    shoulderElbowRecoilAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloRecuoOmbroCotoveloDepois',
    },
    shoulderElbowRecoilAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloRecuoOmbroCotoveloImagemDepois',
    },
    kneeFlexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoJoelhoAntes',
    },
    kneeFlexionAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoJoelhoImagemAntes',
    },
    kneeFlexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoJoelhoDepois',
    },
    kneeFlexionAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoJoelhoImagemDepois',
    },
    plantarFlexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoPlantaAntes',
    },
    plantarFlexionAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoPlantaImagemAntes',
    },
    plantarFlexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloFlexaoPlantaDepois',
    },
    plantarFlexionAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloFlexaoPlantaImagemDepois',
    },
    dorsiflexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloDorsiFlexaoAntes',
    },
    dorsiflexionAngleImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloDorsiFlexaoImagemAntes',
    },
    dorsiflexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'AnguloDorsiFlexaoDepois',
    },
    dorsiflexionAngleImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'AnguloDorsiFlexaoImagemDepois',
    },
    videoBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'VideoAntes',
    },
    videoAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'VideoDepois',
    },
    kopsBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'KopsAntes',
    },
    kopsImageBefore: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'KopsImagemAntes',
    },
    kopsAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'KopsDepois',
    },
    kopsImageAfter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'KopsImagemDepois',
    },
    crankArmLengthBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'PeDeVelaTamanhoAntes',
    },
    crankArmLengthAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'PeDeVelaTamanhoDepois',
    },
    crankArmQFactorBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'PeDeVelaQFactorAntes',
    },
    crankArmQFactorAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      field: 'PeDeVelaQFactorDepois',
    },
    observationBefore: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ObservacaoAntes',
    },
    observationAfter: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ObservacaoDepois',
    },
    additionalInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'InformacoesAdicionais',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'DtCadastro',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'DtAtualizacao',
    },
  },
  {
    sequelize,
    tableName: 'BikeFits',
    modelName: 'BikeFit',
    timestamps: true,
    createdAt: 'DtCadastro',
    updatedAt: 'DtAtualizacao',
  },
);
