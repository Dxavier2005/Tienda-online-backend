import { IsString } from 'class-validator';

export class CreateproductoDto {
    @IsString()
    name: string;
    }