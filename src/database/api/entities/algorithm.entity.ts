import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("APP_ALGORITHM")
export class Algorithm {
    // primary key
    @PrimaryGeneratedColumn()
    no: number;

    // 알고리즘 코드
    @Column({ length: 8, nullable: true})
    code: string;

    // 알고리즘 이름
    @Column({ length: 100, nullable: true})
    codeName: string;

    // 알고리즘 소개글
    @Column({ length: 500, nullable: true})
    explain: string;

    // 수익률
    @Column({type: 'float',nullable: true})
    earningLate: number;

    // 수익평균
    @Column({type: 'float',nullable: true})
    earningAverage: number;

    // 표준편차
    @Column({type: 'float',nullable: true})
    standardDeviation: number;

    // 보유 기간
    @Column({length: 100, nullable: true})
    holdingPeriod: string;

    // 업데이트 날짜
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP"})
    updateDate: Date;


    // 소개글, 알고리즘 수익률, 평균 보유기간, 평균 변동서(표준편차), 종목 평균 시가 총액, 종목 손익 확률, 푸시 사용 여부
}
