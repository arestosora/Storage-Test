/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) public userRespository: Repository<User>) {}

    createUser(user: CreateUserDTO) {
        const newUser = this.userRespository.create(user);
        return this.userRespository.save(newUser);
    }
}
