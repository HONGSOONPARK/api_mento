import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppInfo } from './entities/app-info.entity';


@Injectable()
export class AppInfoService {

    constructor(
        @InjectRepository(AppInfo)
        private appInfoRepository: Repository<AppInfo>,
      ) {}
    
      findAll(): Promise<AppInfo[]> {
        return this.appInfoRepository.find();
      }
    
    //   findOne(id: string): Promise<AppInfo> {
    //     return this.usersRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}
