import { IsString } from 'class-validator';

export class CreateOrdenDto {
    @IsString()
    nombre: string;
}