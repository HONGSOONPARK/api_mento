import { Module } from '@nestjs/common';
import { ApiService } from '../service/api.service';
import { ApiController } from '../controller/api.controller';
import { AppInfo } from '../entities/appinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppInfoService } from '../service/appinfo.service';
import { Connection } from 'typeorm';
import { PushInfoService } from '../service/pushinfo.service';
import { PushInfo } from '../entities/pushinfo.entity';
import { AlgorithmService } from '../service/algorithm.service';
import { Algorithm } from '../entities/algorithm.entity';
import { Notice } from '../entities/notice.entity';
import { Banner } from '../entities/banner.entity';
import { BannerService } from '../service/banner.service';
import { NoticeService } from '../service/notice.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppInfo, PushInfo, Algorithm, Banner, Notice])],
  controllers: [ApiController],
  providers: [ApiService,AppInfoService, PushInfoService, AlgorithmService, BannerService, NoticeService ]
})
export class ApiModule {
  constructor(private connection: Connection) {}
}
