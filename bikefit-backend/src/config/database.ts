import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = parseInt(process.env.DB_PORT || '1433', 10);
const dbEncrypt = process.env.DB_ENCRYPT === 'true';
const dbTrustServerCertificate = process.env.DB_TRUST_SERVER_CERTIFICATE === 'true';

if (!dbName || !dbUser || !dbPassword || !dbHost || isNaN(dbPort)) {
  console.error('Erro: Variáveis de ambiente do banco de dados não configuradas corretamente para o aplicativo.');
  process.exit(1);
}

const sequelizeOptions: Options = {
  host: dbHost,
  port: dbPort,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: dbEncrypt,
    trustServerCertificate: dbTrustServerCertificate,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  // logging: console.log,
};

const sequelize = new Sequelize(dbName, dbUser, dbPassword, sequelizeOptions);

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o db estabelecida para o aplicativo.');
  } catch (error) {
    console.error('Não foi possível conectar com o db: ', error);
    process.exit(1);
  }
}

export default sequelize;
