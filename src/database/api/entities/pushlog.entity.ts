import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity("app_push_log")
export class PushLog {
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    @Column({ length: 10, nullable: true, default: 'D', comment: "푸시 발송종류" })
    type: string;

    @Column({ type: 'text', nullable: true, comment: "푸시 내용"})
    msg: string;

    @Column({ length: 100, nullable: true, comment: "푸시 제목" })
    title: string;

    @Column({comment: "안드로이드 기기에 발송된 수" })
    aos_send_count: number;

    @Column({comment: "IOS 기기에 발송된 수" })
    ios_send_count: number;

    @Column({ length: 1, nullable: true, default: 'N', comment: "푸시 발송여부" })
    send_yn: string;
    
    @Column({ type: 'timestamp', nullable: true, comment: "푸시 발송요청 시간"})
    request_time: Date;

    @Column({ type: 'timestamp', nullable: true, comment: "푸시가 발송될 시간"})
    send_time: Date;
}
