import { IRim, IRimCreationAttributes } from "@/interfaces/index";
import { DataTypes, Model } from "sequelize";
import sequelize from "@/config/database";

export class Rim extends Model<IRim, IRimCreationAttributes> implements IRim {
  id!: number;
  userId?: number;
  size!: string;
}

Rim.init(
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
    size: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "Tamanho",
    },
  },
  {
    sequelize,
    tableName: "Aros",
    modelName: "Rim",
  }
);
