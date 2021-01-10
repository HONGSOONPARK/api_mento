import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InfoModule } from './info/info.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InfoModule ],
})
export class MysqlModule {
  constructor(private readonly connection: Connection) {}
}


