import { DataTypes, Model } from "sequelize";
import sequelize from "@/config/database"; // Ensure this path is correct
import { IBike, IBikeCreationAttributes } from "@/interfaces/IBike"; // Adjust path if needed

export class Bike
  extends Model<IBike, IBikeCreationAttributes>
  implements IBike
{
  public id!: number;
  public userId?: number;
  public clientId!: number; // ClienteId
  public type!: string; // Tipo
  public size!: string; // Tamanho
  public brand!: string; // Marca
  public model!: string; // Modelo
  public year!: number; // Ano
  public rim!: string; // Aro
  public frame!: string; // Quadro

  public createdAt!: Date; // DtCadastro
  public updatedAt!: Date; // DtAtualizacao
}

Bike.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "Id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "UsuarioId",
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "ClienteId",
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Tipo",
    },
    size: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: "Tamanho",
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Marca",
    },
    model: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: "Modelo",
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "Ano",
    },
    rim: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "Aro",
    },
    frame: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "Quadro",
    },

    createdAt: {
      type: DataTypes.DATE,
      field: "DtCadastro",
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "DtAtualizacao",
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "Bikes",
    modelName: "Bike",
    timestamps: true,
    // createdAt: "DtCadastro",
    // updatedAt: "DtAtualizacao",
  }
);
