import { Transform } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddDTO {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  placeId: number;
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
