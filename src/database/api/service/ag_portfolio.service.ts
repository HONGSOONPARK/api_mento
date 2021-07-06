import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgPortfolioDto } from '../dto/ag_portfolio.dto';
import { AgPortfolio } from '../entities/ag_portfolio.entity';



@Injectable()
export class AgPortfolioService {

  private agPortInfo: AgPortfolioDto[] = [];

  constructor(
    @InjectRepository(AgPortfolio)
    private agPortfolioRepository: Repository<AgPortfolioDto>,
  ) { }

  findAll(): Promise<AgPortfolioDto[]> {
    return this.agPortfolioRepository.find();
  }

  async findPortfolioTypeOrder(type: string, column:string, order:string): Promise<AgPortfolioDto[]> {
    console.log('findPortfolioType : find ::' + type + ' :: order ::'+order);
    // 대문자로 변환해라 좋은말할때
    type = type.toUpperCase();
    column = column == null ? null : column.toLowerCase();
    order = order == null ? null : order.toLowerCase();

    return await this.agPortfolioRepository.createQueryBuilder('ag_portfolio')
      .where(`if('ALL'= :type, '1=1', ag_type = :type)`, { type})
      .orderBy(column, order == 'DESC' ? 'DESC' : 'ASC' )
      .getMany();

    // 테스트
    // if (type == "ALL") {
    //   // return await this.agPortfolioRepository.find();
    //   return await this.agPortfolioRepository.createQueryBuilder('ag_portfolio')
    //   .where(`if('ALL'= :type, '1=1', ag_type = :type)`, { type })
    //   .orderBy(column, order = 'ASC' ? 'ASC' : 'DESC')
    //   .getMany();
    //   // .where('ag_type = :type', { type })
    // } else {
    //   return await (await this.agPortfolioRepository.find({ ag_type: type }));
    //   // return await this.agPortfolioRepository.createQueryBuilder('ag_portfolio')
    //   // .where('ag_type = :type', { type })
    //   // .orderBy('id', 'ASC')
    //   // .getMany();
    // }
  }

  async findPortfolioTypePost(portfolio:AgPortfolioDto): Promise<AgPortfolioDto[]> {
    console.log('findPortfolioType : find ::');
    // 대문자로 변환해라 좋은말할때
    const type = portfolio.ag_type.toUpperCase();
    const column = portfolio.column == null ? null : portfolio.column.toLowerCase();
    const order = portfolio.orderby == null ? null : portfolio.orderby.toLowerCase();

    return await this.agPortfolioRepository.createQueryBuilder('ag_portfolio')
      .where(`if('ALL'= :type, '1=1', ag_type = :type)`, { type})
      .orderBy(column, order == 'DESC' ? 'DESC' : 'ASC' )
      .getMany();
  }

  async findPortfolioId(id: number): Promise<AgPortfolioDto> {
    console.log('findPortfolioId : find ::' + id + " ::");
    return await this.agPortfolioRepository.findOne({ id: id });
  }


}