import { IFrame, IFrameCreationAttributes } from "@/interfaces/IFrame";
import sequelize from "@/config/database";
import { DataTypes, Model } from "sequelize";

export class Frame
  extends Model<IFrame, IFrameCreationAttributes>
  implements IFrame
{
  public id!: number;
  public userId?: number;
  public type!: string;
}

Frame.init(
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
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Quadro",
    },
  },
  {
    sequelize,
    tableName: "Quadros",
    modelName: "Frame",
  }
);
