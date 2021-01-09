import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppInfoService } from './app-info.service';
import { AppInfoController } from './app-info.controller';
import { AppInfo } from './entities/app-info.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppInfo])],
  exports: [TypeOrmModule],
  providers: [AppInfoService],
  controllers: [AppInfoController],
})
export class AppInfoModule {
  constructor(private connection: Connection) {}
}


