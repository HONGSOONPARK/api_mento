import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("app_algorithm")
export class Algorithm {
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    // 알고리즘 코드
    @Column({ length: 8, nullable: true, comment: "알고리즘 코드"})
    code: string;

    // 알고리즘 이름
    @Column({ length: 100, nullable: true, comment: "알고리즘 이름"})
    code_name: string;

    // 알고리즘 소개글
    @Column({ length: 500, nullable: true, comment: "알고리즘 소개글"})
    explain: string;

    // 수익률
    @Column({type: 'float',nullable: true, comment: "수익률"})
    earning_late: number;

    // 수익평균
    @Column({type: 'float',nullable: true, comment: "수익평균"})
    earning_average: number;

    // 표준편차
    @Column({type: 'float',nullable: true, comment: "표준편차"})
    standard_deviation: number;

    // 보유 기간
    @Column({length: 100, nullable: true, comment: "보유 기간"})
    holding_period: string;

    // 생성일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성일"})
    create_time: Date;

}
