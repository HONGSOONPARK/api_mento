import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity("app_push_target")
export class PushTarget {
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    @Column({nullable: false, default: '0', comment: "user_info의 id" })
    user_seq: number;

    @Column({ length: 10, nullable: true, comment: "푸시 알고리즘 종류" })
    type: string;

    @Column({ length: 100, nullable: true, comment: "푸시 알고리즘 이름" })
    type_name: string;
   
    // 생성일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성일"})
    create_date: Date;
}
