import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("APP_NOTICE")
export class Notice {
    // primary key
    @PrimaryGeneratedColumn()
    no: number;

    // 투자기간
    @Column({ length: 100, nullable: true})
    period: string;

    // 평균수익률
    @Column({type: 'float',nullable: true})
    earningLate: number;

    // 투자금액
    @Column({type: 'float',nullable: true})
    cost: number;

    // 투자 시작일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP"})
    startDate: string;

    // 투자 종료일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP"})
    endDate: string;

    // 업데이트 날짜
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP"})
    updateDate: Date;
    
}
