import { Module } from '@nestjs/common';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../services/database/database.config';
import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig.getDatabaseConfig()),
    UsersModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
