import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoticeDto } from '../dto/notice.dto';
import { Notice } from '../entities/notice.entity';


@Injectable()
export class NoticeService {

    private nopticeInfo:NoticeDto[] = [];

    constructor(
        @InjectRepository(Notice)
        private noticeInfoRepository: Repository<NoticeDto>,
    ) {}

    findAll(): Promise<NoticeDto[]> {
      return this.noticeInfoRepository.find();
    }

    async findTodayNotice(no: number): Promise<NoticeDto> {
      const noticeInfo = await this.noticeInfoRepository.findOne({no:no});
      console.log('findTodayNotice : find ::'+no+ " :: result ==> {"+noticeInfo.no + "}");
      return noticeInfo;
    }

}