import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("MOBILE_DEVICE_INFO")
export class DeviceInfo {
    @PrimaryGeneratedColumn()
    no: number;

    @Column({ length: 1200, nullable: true })
    fcmToken: string;

    @Column({ length: 100, nullable: true })
    accountId: string;

    @Column({ length: 1, nullable: true })
    pushYn: string;

    @Column({ type: 'timestamp', nullable: false})
    updateDate: Date;
}
