/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from '../../config';

const config = new Config();

export class DatabaseConfig {
  static getDatabaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      autoLoadEntities: config.database.autoLoadEntities,
      synchronize: config.database.synchronize,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    };
  }
}
