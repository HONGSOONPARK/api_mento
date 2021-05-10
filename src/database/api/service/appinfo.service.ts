import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppInfoDto } from '../dto/appinfo.dto';
import { AppInfo } from '../entities/appinfo.entity';


@Injectable()
export class AppInfoService {


    private appInfo:AppInfoDto[] = [];

    constructor(
        @InjectRepository(AppInfo)
        private appInfoRepository: Repository<AppInfoDto>,
      ) {}
    
      findAll(): Promise<AppInfoDto[]> {
        return this.appInfoRepository.find();
      }

      async findAppName(name: string): Promise<AppInfoDto> {
        const appInfo = await this.appInfoRepository.findOne({app_name:name});
        console.log('findAppName : find ::'+name+ " :: result ==> {"+appInfo.app_name+"}");
        return appInfo;
      }

}