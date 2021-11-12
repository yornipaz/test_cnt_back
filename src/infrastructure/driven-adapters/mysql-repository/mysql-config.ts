import {Sequelize} from 'sequelize-typescript'
import dotenv from 'dotenv'
import { PatientData } from './patient/tbl_patient';

dotenv.config();
export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'db_cnt_test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Upb2021@*',
    timezone: '-05:00',
    models: [PatientData],
    logging: false
});

