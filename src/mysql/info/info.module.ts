import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { Info } from './entities/info.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Info])],
  providers: [InfoService],
  controllers: [InfoController]
})
export class InfoModule {
  constructor(private connection: Connection) {}
}


