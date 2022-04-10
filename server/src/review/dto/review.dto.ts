import { Transform } from 'class-transformer';
import {IsInt, IsNotEmpty, IsString} from 'class-validator';
/*
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
}*/

export class AddDTO {
    @IsNotEmpty()
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    placeId: number;
    @IsNotEmpty()
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    userId: number;
    @IsNotEmpty()
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    rating: number;
    @IsNotEmpty()
    @IsString()
    feedback: string;
}
