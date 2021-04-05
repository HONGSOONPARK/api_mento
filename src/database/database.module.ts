import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ApiModule } from './api/module/api.module';

@Module({
  imports: [TypeOrmModule.forRoot(),ApiModule ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}


