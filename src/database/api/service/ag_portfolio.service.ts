import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgPortfolioDto } from '../dto/ag_portfolio.dto';
import { AgPortfolio } from '../entities/ag_portfolio.entity';



@Injectable()
export class AgPortfolioService {

    private agPortInfo:AgPortfolioDto[] = [];

    constructor(
        @InjectRepository(AgPortfolio)
        private agPortfolioRepository: Repository<AgPortfolio>,
      ) {}
    
      findAll(): Promise<AgPortfolio[]> {
        return this.agPortfolioRepository.find();
      }

      // async findFcmToken(token: string): Promise<AgPortfolioDto> {
      //   const agPortInfo = await this.agPortfolioRepository.findOne({fcm_token:token});
      //   console.log('findFcmToken : find ::'+token+ " :: result ==> {"+agPortInfo.fcm_token + "}");
      //   return agPortInfo;
      // }
      
      // async mergePushInfo(agPortInfo:AgPortfolioDto): Promise<AgPortfolioDto>{
      //   console.log('pushToken :'+agPortInfo.toString());
      //   const newAgPortInfo:AgPortfolioDto = await this.agPortfolioRepository.save({...agPortInfo});
      //   return newAgPortInfo;
      // }

      // deleteOne(token:string){
        // this.findFcmToken(token);
        // this.agPortInfo = this.agPortInfo.filter(agPortInfo => agPortInfo.fcm_token !== token);
      // }

}