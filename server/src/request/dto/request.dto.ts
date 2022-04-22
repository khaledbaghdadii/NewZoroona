import { Transform } from 'class-transformer';
import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export class AddDTO {
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    placeId: number;
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    managerId: number;
    @IsNotEmpty()
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    requestTypeId: number;
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    reviewId: number;
}
