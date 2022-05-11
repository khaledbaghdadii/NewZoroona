import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddPlaceDTO {
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
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  averagePricePerPerson: number;
}
export class ManagerDTO {
  //those of place
  @IsEmail()
  @IsOptional()
  placeEmail: string;
  @IsString()
  @IsNotEmpty()
  placeName: string;
  @IsString()
  @IsOptional()
  placePhoneNumber: string;
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
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  categoryId: number;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  orientationId: number;
  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => Boolean(value))
  hasReservation: boolean;
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  averagePricePerPerson: number;
  //those of user
  @IsEmail()
  @IsNotEmpty()
  userEmail: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
  @IsString()
  @IsNotEmpty()
  userPhoneNumber: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @Transform(({ value }) => new Date(value))
  dateOfBirth: Date;
}

export class AddReservationDTO {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  reservationId: number;
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
  numberofpeople: number;
  @IsNotEmpty()
  // @IsDate()
  @Transform(({ value }) => new Date(value))
  startdate: Date;
  @IsNotEmpty()
  // @IsDate()
  @Transform(({ value }) => new Date(value))
  enddate: Date;
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  cost: number;
  @Transform(({ value }) =>
    value.split(',').map(function (item) {
      return parseInt(item, 10);
    }),
  )
  packagesIds: number[];
}
export class DeleteReviewDTO {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  reviewId: number;
}
