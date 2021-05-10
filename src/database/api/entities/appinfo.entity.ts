import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("app_info")
export class AppInfo {
    @PrimaryGeneratedColumn({comment: "고유 id"})
    seq: number;

    @Column({ length: 100, nullable: true, comment: "AOS 패키지 이름" })
    aos_package: string;

    @Column({ length: 100, nullable: true, comment: "IOS 패키지 이름" })
    ios_package: string;

    @Column({ length: 100, nullable: true, comment: "앱 이름"  })
    app_name: string;

    @Column({ length: 10, nullable: true, default: '0.0.0', comment: "AOS 최소 요구버전"  })
    aos_min_version: string;

    @Column({ length: 10, nullable: true, default: '0.0.0', comment: "AOS 마켓 등록버전"  })
    aos_market_version: string;

    @Column({ length: 10, nullable: true, default: '0.0.0', comment: "IOS 최소 요구버전"  })
    ios_min_version: string;

    @Column({ length: 10, nullable: true, default: '0.0.0', comment: "IOS 마켓 등록버전"  })
    ios_market_version: string;

    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP", comment: "생성시간"})
    create_time: Date;
}
