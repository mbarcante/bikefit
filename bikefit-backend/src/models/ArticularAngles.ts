import { DataTypes, Model } from "sequelize";
import sequelize from "@/config/database";
import {
  IArticularAngles,
  IArticularAnglesCreationAttributes,
} from "@/interfaces";

export class ArticularAngles
  extends Model<IArticularAngles, IArticularAnglesCreationAttributes>
  implements IArticularAngles
{
  public id!: number;
  public userId?: number;
  public type!: string;
  public cyclistStatus!: string;
  public minTrunkUpperLimbAngle!: number;
  public maxTrunkUpperLimbAngle!: number;
  public minTrunkFlexionAngle!: number;
  public maxTrunkFlexionAngle!: number;
  public minElbowFlexionAngle!: number;
  public maxElbowFlexionAngle!: number;
  public minShoulderElbowRecoilAngle!: number;
  public maxShoulderElbowRecoilAngle!: number;
  public minKneeFlexionAngle!: number;
  public maxKneeFlexionAngle!: number;
  public minPlantarFlexionAngle!: number;
  public maxPlantarFlexionAngle!: number;
  public dorsiflexionAngleBefore!: number;
  public dorsiflexionAngleAfter!: number;
  public kopsBefore!: number;
  public kopsAfter!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ArticularAngles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "Id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "UsuarioId",
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Tipo",
    },
    cyclistStatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "StatusCiclista",
    },
    minTrunkUpperLimbAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloTroncoMembroSuperiorMin",
    },
    maxTrunkUpperLimbAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloTroncoMembroSuperiorMax",
    },
    minTrunkFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoTroncoMin",
    },
    maxTrunkFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoTroncoMax",
    },
    minElbowFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoCotoveloMin",
    },
    maxElbowFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoCotoveloMax",
    },
    minShoulderElbowRecoilAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloRecuoOmbroCotoveloMin",
    },
    maxShoulderElbowRecoilAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloRecuoOmbroCotoveloMax",
    },
    minKneeFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoJoelhoMin",
    },
    maxKneeFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoJoelhoMax",
    },
    minPlantarFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoPlantaMin",
    },
    maxPlantarFlexionAngle: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloFlexaoPlantaMax",
    },
    dorsiflexionAngleBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloDorsiFlexaoAntes",
    },
    dorsiflexionAngleAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "AnguloDorsiFlexaoDepois",
    },
    kopsBefore: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "KopsAntes",
    },
    kopsAfter: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: "KopsDepois",
    },
  },
  {
    sequelize,
    tableName: "AngulosArticulares",
    modelName: "ArticularAngles",
    timestamps: true,
    createdAt: "DtCadastro",
    updatedAt: "DtAtualizacao",
  }
);
