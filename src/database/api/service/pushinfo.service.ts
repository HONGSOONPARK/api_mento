import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PushInfoDto } from '../dto/pushinfo.dto';
import { PushInfo } from '../entities/pushinfo.entity';


@Injectable()
export class PushInfoService {

    private pushInfo:PushInfoDto[] = [];

    constructor(
        @InjectRepository(PushInfo)
        private pushInfoRepository: Repository<PushInfoDto>,
      ) {}
    
      findAll(): Promise<PushInfo[]> {
        return this.pushInfoRepository.find();
      }

      async findFcmToken(token: string): Promise<PushInfoDto> {
        const pushInfo = await this.pushInfoRepository.findOne({fcmToken:token});
        console.log('findFcmToken : find ::'+token+ " :: result ==> {"+pushInfo.fcmToken + "}");
        return pushInfo;
      }
      
      async mergePushInfo(pushInfo:PushInfoDto): Promise<PushInfoDto>{
        console.log('pushToken :'+pushInfo.toString());
        const newPushInfo:PushInfoDto = await this.pushInfoRepository.save({...pushInfo});
        return newPushInfo;
      }

      deleteOne(token:string){
        this.findFcmToken(token);
        this.pushInfo = this.pushInfo.filter(pushInfo => pushInfo.fcmToken !== token);
      }

}