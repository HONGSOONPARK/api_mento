import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Info } from './entities/info.entity';


@Injectable()
export class InfoService {

    constructor(
        @InjectRepository(Info)
        private infoRepository: Repository<Info>,
      ) {}
    
      findAll(): Promise<Info[]> {
        return this.infoRepository.find();
      }

    
    //   findOne(id: string): Promise<Info> {
    //     return this.usersRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}