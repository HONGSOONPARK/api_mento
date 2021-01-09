import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class AppInfo {
    @PrimaryGeneratedColumn()
    no: number;

    @Column()
    app_name: string;
}


