import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
}