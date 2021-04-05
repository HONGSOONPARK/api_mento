import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("app_info")
export class AppInfo {
    @PrimaryGeneratedColumn()
    no: number;

    @Column({ length: 100, nullable: true })
    aos_package: string;

    @Column({ length: 100, nullable: true })
    aos_app_name: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    aos_min_version: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    aos_market_version: string;

    @Column({ length: 100, nullable: true })
    ios_package: string;

    @Column({ length: 100, nullable: true })
    ios_app_name: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    ios_min_version: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    ios_market_version: string;

    @Column({ type: 'timestamp', nullable: false })
    update_date: Date;
}
