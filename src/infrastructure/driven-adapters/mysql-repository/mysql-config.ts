import {Sequelize} from 'sequelize-typescript'
import dotenv from 'dotenv'
import { PatientData } from './patient/tbl_patient';

dotenv.config();
export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: process.env.DB_DATABASE,
    host:process.env.DB_HOST,
    port:parseInt(process.env.DB_PORT!),
    username:process.env.DB_USERNAME ,
    password:process.env.DB_PASSWORD,
    timezone:'-05:00',
    models: [PatientData],
    logging: false
});

