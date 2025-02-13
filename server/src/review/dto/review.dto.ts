import { Transform } from 'class-transformer';
import {IsBoolean, IsInt, IsNotEmpty, IsString} from 'class-validator';


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
