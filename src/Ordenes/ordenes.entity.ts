import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}