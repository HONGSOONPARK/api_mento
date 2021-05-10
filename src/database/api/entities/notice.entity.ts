import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("app_notice")
export class Notice {
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    // 투자기간
    @Column({ length: 100, nullable: true, comment: "투자기간"})
    period: string;

    // 평균수익률
    @Column({type: 'float',nullable: true, comment: "평균수익률"})
    earning_late: number;

    // 투자금액
    @Column({type: 'float',nullable: true, comment: "투자금액"})
    cost: number;

    // 투자 시작일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP", comment: "시작일"})
    start_date: string;

    // 투자 종료일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP", comment: "종료일"})
    end_date: string;

    // 생성일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성일"})
    create_date: Date;
    
}
