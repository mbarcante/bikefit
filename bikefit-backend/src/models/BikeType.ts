import { DataTypes, Model } from "sequelize";
import sequelize from "@/config/database";
import { IBikeType, IBikeTypeCreationAttributes } from "@/interfaces/index";

export class BikeType
  extends Model<IBikeType, IBikeTypeCreationAttributes>
  implements IBikeType
{
  public id!: number;
  public userId?: number;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BikeType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "Id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "UsuarioId",
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Descricao",
    },
  },
  {
    sequelize,
    tableName: "TiposBike",
    modelName: "BikeType",
  }
);
