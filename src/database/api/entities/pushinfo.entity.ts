import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity("app_push_info")
export class PushInfo {
    @PrimaryColumn({length:180, comment: "클라이언트 고유 fcm 토큰"})
    fcm_token: string;

    @Column({nullable: false, default: '0', comment: "user_info의 id" })
    user_seq: number;

    @Column({ length: 1, nullable: false, default: 'N', comment: "푸시 수신여부" })
    push_yn: string;

    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성일"})
    create_time: Date;
}
