import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("APP_BANNBER")
export class Banner{
    // primary key
    @PrimaryGeneratedColumn()
    no: number;

    // 배너 표시 화면
    @Column({ length: 8, nullable: true})
    screen: string;

    // 배너 코드
    @Column({ length: 8, nullable: true})
    code: string;

    // 배너 이름
    @Column({ length: 100, nullable: true})
    codeName: string;

    // 배너 설명
    @Column({ length: 500, nullable: true})
    explain: string;

    // 이미지 url 
    @Column({ type: 'text', nullable: true})
    urlPath: string;

    // 사용여부
    @Column({ length: 1, nullable: true})
    useYn: string;

    // 배너 표시 시작일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP"})
    startDate: string;

    // 배너 표시 종료일
    @Column({ type: 'timestamp', nullable: true, default: () => "CURRENT_TIMESTAMP"})
    endDate: string;

    // 업데이트 날짜
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP"})
    updateDate: Date;


}
