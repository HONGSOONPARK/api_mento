import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity("app_push_msg")
export class PushMsg {
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    @Column({ length: 10, nullable: false, default: 'D', comment: "푸시 발송종류" })
    type: string;

    @Column({ type: 'text', nullable: true, comment: "푸시 내용"})
    msg: string;

    @Column({ length: 100, nullable: true, comment: "푸시 제목" })
    title: string;

    @Column({ length: 1, nullable: false, default: 'N', comment: "푸시 발송여부" })
    send_yn: string;
    
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "푸시 발송요청 시간"})
    request_time: Date;

    @Column({ type: 'timestamp', nullable: true, comment: "푸시가 발송될 시간"})
    send_time: Date;
}
