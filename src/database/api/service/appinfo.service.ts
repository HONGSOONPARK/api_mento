import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppInfo } from '../entities/appinfo.entity';


@Injectable()
export class AppInfoService {

    constructor(
        @InjectRepository(AppInfo)
        private infoRepository: Repository<AppInfo>,
      ) {}
    
      findAll(): Promise<AppInfo[]> {
        return this.infoRepository.find();
      }

    
    //   findOne(id: string): Promise<Info> {
    //     return this.usersRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}