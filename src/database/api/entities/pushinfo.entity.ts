import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity("APP_PUSH_INFO")
export class PushInfo {
    // @PrimaryGeneratedColumn()
    // no: number;

    @PrimaryColumn({length:100})
    fcmToken: string;

    @Column({ length: 100, nullable: true, default: '0' })
    accountId: string;

    @Column({ length: 1, nullable: true, default: 'N' })
    pushYn: string;

    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP"})
    updateDate: Date;
}
