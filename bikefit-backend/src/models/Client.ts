import { Model, DataTypes } from "sequelize";
import sequelize from "@/config/database";
import { IClient, IClientCreationAttributes } from "@/interfaces/index";

export class Client
  extends Model<IClient, IClientCreationAttributes>
  implements IClient
{
  public id!: number;
  public name!: string;
  public sex!: string;
  public birthDate!: Date;
  public profession?: string;
  public email!: string;
  public cellphone!: string;
  public observations?: string;
  public userId?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "Id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "UsuarioId",
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Nome",
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: false,
      field: "Sexo",
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "DtNascimento",
    },
    profession: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "Profissao",
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: "Email",
    },
    cellphone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      field: "Celular",
    },
    observations: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "Observacoes",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "DtCadastro",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "DtAtualizacao",
    },
  },
  {
    sequelize,
    tableName: "Clientes",
    modelName: "Client",
    timestamps: true,
    createdAt: "DtCadastro",
    updatedAt: "DtAtualizacao",
  }
);
