import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppInfo } from '../entities/appinfo.entity';


@Injectable()
export class AppInfoService {


    private appInfo:AppInfo[] = [];

    constructor(
        @InjectRepository(AppInfo)
        private appInfoRepository: Repository<AppInfo>,
      ) {}
    
      findAll(): Promise<AppInfo[]> {
        return this.appInfoRepository.find();
      }

      findAppName(name: string): Promise<AppInfo> {
        const appInfo = this.appInfoRepository.findOne({appName:name});
        console.log('findAppName :'+name);
        if(!appInfo){
            throw new NotFoundException(`appInfo with app_name ${name} not found.`);
        }
        return appInfo;
      }

      // 작성중
      create(appInfo:AppInfo){
          this.appInfo.push({
              no: this.appInfo.length + 1,
              ...appInfo,
          });
      }


    
    //   findOne(id: string): Promise<Info> {
    //     return this.usersRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}