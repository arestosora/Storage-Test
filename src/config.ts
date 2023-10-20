/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
    database: { host: string; port: number; username: string; password: string; database: string; synchronize: boolean; autoLoadEntities: boolean; };
    
    constructor() {
        this.database = {
            host: process.env.HOST,
            port: parseInt(process.env.PORT, 10),
            username: process.env.USER,
            password: process.env.PASS,
            database: process.env.DATABASE,
            synchronize: true,
            autoLoadEntities: true,
        };
    }

    static loadDatabaseConfig(): Config {
        const config = new Config();
        return config;
    }

    getDatabaseConfig(): { [key: string]: any } {
        return this.database;
    }
}