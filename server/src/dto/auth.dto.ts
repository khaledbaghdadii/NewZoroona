import { ParseIntPipe } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SignupDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  roleTypeId: number;
}

export class SigninDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
