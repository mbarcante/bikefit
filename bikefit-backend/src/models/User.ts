import { DataTypes, Model } from "sequelize";
import { IUser } from "@/interfaces/IUser";
import sequelize from "@/config/database";

export class User extends Model<IUser> implements IUser {
  public id?: number;
  public name!: string;
  public password!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "Id",
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "Nome",
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "Senha",
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: "Email",
    },
  },
  {
    sequelize,
    tableName: "Usuarios",
    modelName: "User",
    timestamps: true,
    createdAt: 'DtCadastro',
    updatedAt: 'DtAtualizacao',
  });