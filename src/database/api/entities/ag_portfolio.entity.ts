import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("ag_portfolio")
export class AgPortfolio {

    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    id: number;

    // 알고리즘 코드
    @Column({ nullable: true, comment: "부모 seq"})
    p_seq: number;

    @Column({ length: 100, nullable: true, comment: "알고리즘 종류"})
    ag_type: string;

    @Column({ length: 500, nullable: true, comment: "코드"})
    code: string;

    @Column({nullable: true, comment: "보유 기간"})
    holding_day: number;

    @Column({ length: 500, nullable: true, comment: "종목명" })
    stock_name: string;

    @Column({nullable: true, comment: "매도 평균가"})
    average_buy_price: number;

    @Column({nullable: true, comment: "매수 평균가"})
    average_sell_price: number;

    @Column({ length: 500, nullable: true, comment: "첫 구매일" })
    first_buy_date: string;

    @Column({ length: 500, nullable: true, comment: "종목 판매일자" })
    last_sell_date: string;

    @Column({ length: 500, nullable: true, comment: "상태" })
    status: string;

    @Column({ nullable: true, comment: "현재가격" })
    cur_price: number;

    @Column({ type: 'double', nullable: true, comment: "등락률" })
    rate: number;

}
