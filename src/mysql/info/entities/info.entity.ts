import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("info")
export class Info {
    @PrimaryGeneratedColumn()
    no: number;

    @Column({ length: 50, nullable: true })
    name: string;
}