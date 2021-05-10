import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BannerDto } from '../dto/banner.dto';
import { Banner } from '../entities/banner.entity';


@Injectable()
export class BannerService {

    private bannerInfo:BannerDto[] = [];

    constructor(
      @InjectRepository(Banner)
      private bannerInfoRepository: Repository<BannerDto>,
    ) {}
    
    findAll(): Promise<BannerDto[]> {
      return this.bannerInfoRepository.find();
    }

    async findTodayBanner(seq: number): Promise<BannerDto> {
      const bannerInfo = await this.bannerInfoRepository.findOne({seq:seq});
      console.log('findTodayBanner : find ::'+seq+ " :: result ==> {"+bannerInfo.seq + "}");
      return bannerInfo;
    }

}