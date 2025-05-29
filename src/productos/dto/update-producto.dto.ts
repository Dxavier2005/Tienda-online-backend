import { IsOptional, IsString } from 'class-validator';

export class UpdateproductoDto {
    @IsString()
    @IsOptional()
    name?: string;
    }