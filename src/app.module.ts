import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { Mysql } from './mysql/mysql.module';

@Module({
  imports: [ApiModule, Mysql],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
