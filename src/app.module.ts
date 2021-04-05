import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './database/api/module/api.module';
import { DatabaseModule } from './database/database.module';
import { Connection } from 'typeorm';

@Module({
  imports: [ApiModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}