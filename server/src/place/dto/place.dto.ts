import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDTO {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
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
  @IsOptional()
  location: string;
  @IsString()
  @IsOptional()
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
  averagePricePerPerson: number;
}

export class AddDTO {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
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
  @IsOptional()
  location: string;
  @IsString()
  @IsOptional()
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
  @IsOptional()
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
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  averagePricePerPerson: number;
}

export class FeatureDTO {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  placeId: number;
  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => Boolean(value))
  feature: boolean;
}

export class FilterDTO {
  @IsNotEmpty()
  @Transform(({value} ) =>
    value.toString().split(',').map(function (item) {
      return parseInt(item);
    }),
  )
  @IsArray()
  orientation: number[];
  @IsNotEmpty()
  @Transform(({value} ) =>
      value.toString().split(',').map(function (item) {
        return parseInt(item);
      }),
  )
  @IsArray()
  category: number[];
  @Transform(({ value }) => value.toString().split(','))
  @IsArray()
  district: string[];
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  hasReservation: number;
  @IsInt()
  @IsOptional()
  minPrice;
  @IsInt()
  @IsOptional()
  maxPrice;
}