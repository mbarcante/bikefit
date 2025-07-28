import dotenv from 'dotenv';
import path from 'path';
import { Options } from 'sequelize';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = parseInt(process.env.DB_PORT || '1433', 10);
const dbEncrypt = process.env.DB_ENCRYPT === 'true';
const dbTrustServerCertificate = process.env.DB_TRUST_SERVER_CERTIFICATE === 'true';

const config: { [key: string]: Options } = {
    development: {
        username: dbUser,
        password: dbPassword,
        database: dbName,
        host: dbHost,
        port: dbPort,
        dialect: 'mssql',
        dialectOptions: {
            encrypt: dbEncrypt,
            trustServerCertificate: dbTrustServerCertificate,
        },
        logging: console.log,
    },
    test: {
        username: process.env.DB_USER_TEST || dbUser,
        password: process.env.DB_PASSWORD_TEST || dbPassword,
        database: process.env.DB_NAME_TEST || 'bikefit_test',
        host: process.env.DB_HOST_TEST || dbHost,
        port: parseInt(process.env.DB_PORT_TEST || '1433', 10),
        dialect: 'mssql',
        dialectOptions: {
            encrypt: dbEncrypt,
            trustServerCertificate: dbTrustServerCertificate,
        },
        logging: false,
    },
    production: {
        username: process.env.DB_USER_PROD || dbUser,
        password: process.env.DB_PASSWORD_PROD || dbPassword,
        database: process.env.DB_NAME_PROD || 'bikefit_prod',
        host: process.env.DB_HOST_PROD || dbHost,
        port: parseInt(process.env.DB_PORT_PROD || '1433', 10),
        dialect: 'mssql',
        dialectOptions: {
            encrypt: dbEncrypt,
            trustServerCertificate: dbTrustServerCertificate,
        },
        logging: false,
    }
};

module.exports = config;