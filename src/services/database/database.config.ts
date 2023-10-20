/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from '../../config';


export class DatabaseConfig {
    static getDatabaseConfig(): TypeOrmModuleOptions {
        const config = Config.loadDatabaseConfig();
        const Settings = config.getDatabaseConfig();

        return {
            type: 'postgres',
            ...Settings,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
    }
}