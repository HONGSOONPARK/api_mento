import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("MOBILE_APP_INFO")
export class AppInfo {
    @PrimaryGeneratedColumn()
    no: number;

    @Column({ length: 100, nullable: true })
    package: string;

    @Column({ length: 100, nullable: true })
    appName: string;

    // @Column({ length: 100, nullable: true })
    // aos_package: string;

    // @Column({ length: 100, nullable: true })
    // aos_app_name: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    aosMinVersion: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    aosMarketVersion: string;

    // @Column({ length: 100, nullable: true })
    // ios_package: string;

    // @Column({ length: 100, nullable: true })
    // ios_app_name: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    iosMinVersion: string;

    @Column({ length: 10, nullable: true, default: '0.0.0' })
    iosMarketVersion: string;

    @Column({ type: 'timestamp', nullable: false })
    updateDate: Date;
}
