import { Transform } from 'class-transformer';
import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export class AddDTO {
    @IsInt()
    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value))
    reporterId: number;
    @IsInt()
    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value))
    reviewId: number;
    @IsString()
    description: string;

}
