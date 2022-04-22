import { Transform } from 'class-transformer';
import {IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString} from 'class-validator';

export class UpdateDTO {
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  placeId: number;
  @IsString()
  @IsNotEmpty()
  district: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  location: string;
  @IsString()
  website: string;
  @IsString()
  @IsNotEmpty()
  sector: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  image: string;
}

export class AddDTO {
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  district: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  location: string;
  @IsString()
  website: string;
  @IsString()
  @IsNotEmpty()
  sector: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  categoryId: number;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  orientationId: number;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  managerId: number;
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => Boolean(value))
  hasReservation: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => Boolean(value))
  fromRequest: boolean;
}
