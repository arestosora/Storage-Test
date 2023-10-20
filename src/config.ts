/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
    database: { host: string; port: number; username: string; password: string; database: string; synchronize: boolean; autoLoadEntities: boolean; };
    constructor() {
        this.database = {
            host: process.env.HOST,
            port: 5432,
            username: process.env.USER,
            password: process.env.PASS,
            database: process.env.DATABASE,
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}