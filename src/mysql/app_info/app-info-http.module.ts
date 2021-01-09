import { Module } from '@nestjs/common';
import { AppInfoService } from './app-info.service';
import { AppInfoController } from './app-info.controller';
import { AppInfoModule } from './app-info.module';

@Module({
  imports: [AppInfoModule],
  providers: [AppInfoService],
  controllers: [AppInfoController]
})
export class UserHttpModule {}
