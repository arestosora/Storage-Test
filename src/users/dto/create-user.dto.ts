/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}