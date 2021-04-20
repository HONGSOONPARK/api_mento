import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceInfo } from '../entities/deviceinfo.entity';


@Injectable()
export class DeviceInfoService {


    private deviceInfo:DeviceInfo[] = [];

    constructor(
        @InjectRepository(DeviceInfo)
        private deviceInfoRepository: Repository<DeviceInfo>,
      ) {}
    
      findAll(): Promise<DeviceInfo[]> {
        return this.deviceInfoRepository.find();
      }

      findToken(token: string): Promise<DeviceInfo> {
        const deviceInfo = this.deviceInfoRepository.findOne({fcmToken:token});
        console.log('findAppName :'+token);
        if(!deviceInfo){
            throw new NotFoundException(`deviceInfo with app_name ${token} not found.`);
        }
        return deviceInfo;
      }

      
      insertToken(deviceInfo:DeviceInfo){
          this.deviceInfo.push({
              no: this.deviceInfo.length + 1,
              ...deviceInfo,
          });
      }


    
    //   findOne(id: string): Promise<Info> {
    //     return this.usersRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}