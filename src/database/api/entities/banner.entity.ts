import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, DatabaseType } from 'typeorm';

@Entity("app_bannber")
export class Banner{
    // primary key
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    // 배너 표시 화면
    @Column({ length: 8, nullable: true, comment: "배너 표시 화면"})
    screen: string;

    // 배너 코드
    @Column({ length: 8, nullable: true, comment: "배너 코드"})
    code: string;

    // 배너 이름
    @Column({ length: 100, nullable: true, comment: "배너 이름"})
    code_name: string;

    // 배너 설명
    @Column({ length: 500, nullable: true, comment: "배너 설명"})
    explain: string;

    // 이미지 url 
    @Column({ type: 'text', nullable: true, comment: "이미지 url"})
    url_path: string;

    // 사용여부
    @Column({ length: 1, nullable: true, comment: "배너 사용여부"})
    use_yn: string;

    // 배너 표시시작일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "배너 표시시작일"})
    start_date: string;

    // 배너 표시종료일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "배너 표시종료일"})
    end_date: string;

    // 생성일
    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성일"})
    create_time: Date;


}
