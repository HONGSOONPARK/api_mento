import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlgorithmDto } from '../dto/algorithm.dto';
import { Algorithm } from '../entities/algorithm.entity';


@Injectable()
export class AlgorithmService {

    private algoInfo:AlgorithmDto[] = [];

    constructor(
        @InjectRepository(Algorithm)
        private algoInfoRepository: Repository<AlgorithmDto>,
      ) {}
    
      findAll(): Promise<AlgorithmDto[]> {
        return this.algoInfoRepository.find();
      }

      async findAlgorithm(code: string): Promise<AlgorithmDto> {
        const algoInfo = await this.algoInfoRepository.findOne({code:code});
        console.log('findAlgorithm : find ::'+code+ " :: result ==> {"+algoInfo.code + "}");
        return algoInfo;
      }

}