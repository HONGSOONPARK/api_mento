import { Module } from '@nestjs/common';
import { ApiService } from '../service/api.service';
import { ApiController } from '../controller/api.controller';
import { AppInfo } from '../entities/appinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppInfoService } from '../service/appinfo.service';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppInfo])],
  controllers: [ApiController],
  providers: [ApiService,AppInfoService]
})
export class ApiModule {
  constructor(private connection: Connection) {}
}
