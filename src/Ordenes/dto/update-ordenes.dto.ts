import { IsOptional, IsString } from 'class-validator';

export class UpdateOrdenesDto {
    @IsString()
    @IsOptional()
    name?: string;
}