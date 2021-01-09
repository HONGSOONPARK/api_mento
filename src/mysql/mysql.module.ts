import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppInfoModule } from './app_info/app-info.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AppInfoModule],
})
export class Mysql {
  constructor(private connection: Connection) {}
}


