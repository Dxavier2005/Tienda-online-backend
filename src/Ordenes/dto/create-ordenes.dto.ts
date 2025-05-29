import { IsString } from 'class-validator';

export class CreateOrdenesDto {
    @IsString()
    name: string;
}