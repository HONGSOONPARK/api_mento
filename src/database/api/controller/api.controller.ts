import { Controller, Get, Param, Post, Body, Patch, Put, Logger } from '@nestjs/common';
import { AlgorithmDto } from '../dto/algorithm.dto';
import { AppInfoDto } from '../dto/appinfo.dto';
import { BannerDto } from '../dto/banner.dto';
import { NoticeDto } from '../dto/notice.dto';
import { PushInfoDto } from '../dto/pushinfo.dto';
import { AppInfo } from '../entities/appinfo.entity';
import { AlgorithmService } from '../service/algorithm.service';
import { ApiService } from '../service/api.service';
import { AppInfoService } from '../service/appinfo.service';
import { BannerService } from '../service/banner.service';
import { NoticeService } from '../service/notice.service';
import { PushInfoService } from '../service/pushinfo.service';
import { AgPortfolioService } from '../service/ag_portfolio.service';

import { Response, ResponseMessage } from '../utils/response.utils';
import { AgPortfolioDto } from '../dto/ag_portfolio.dto';

@Controller('api')
export class ApiController {

  constructor(
    private readonly apiService: ApiService,
    private readonly appInfoService: AppInfoService,
    private readonly pushInfoService: PushInfoService,
    private readonly algorithmService: AlgorithmService,
    private readonly bannerService: BannerService,
    private readonly noticeService: NoticeService,
    private readonly agPortfolioService: AgPortfolioService
  ) { }

  @Get()
  getRoot(): string {
    return this.apiService.getRoot();
  }

  // 앱 정보 전부 조회
  @Get('/appinfo/a')
  appInfoAll(): Promise<AppInfo[]> {
    return this.appInfoService.findAll();
  }

  // 앱 정보 
  @Get('/appinfo/g/:name')
  async appInfoOne(@Param('name') appName: string): Promise<Response> {
    // return this.appInfoService.findAppName(appName);
    console.log("name ::" + appName);
    try {
      const appInfo: AppInfoDto = await this.appInfoService.findAppName(appName);
      // return new ResponseMessage().error(999, "Error").build();
      return new ResponseMessage().success().body(appInfo).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // FCM 토큰 정보 갖고 오기
  @Get('/pushinfo/g/:token')
  async pushInfoOne(@Param('token') token: string): Promise<Response> {
    console.log("token ::" + token);
    try {
      const pushInfo: PushInfoDto = await this.pushInfoService.findFcmToken(token);
      // return new ResponseMessage().error(999, "Error").build();
      return new ResponseMessage().success().body(pushInfo).build();
    } catch (err) {
      Logger.error(err);
      return new ResponseMessage().error(999, "Error").build();
    }
  }

  // FCM 토큰 정보 insert/update
  @Post('/pushinfo/m')
  async pushInfoMerge(@Body() info: PushInfoDto): Promise<Response> {
    try {
      const pushInfo: PushInfoDto = await this.pushInfoService.mergePushInfo(info);
      return new ResponseMessage().success().body(pushInfo).build();
    } catch (err) {
      Logger.error(err);
    }
  }


  // 메인 알고리즘 (회원 아이디와 연결 필요)
  @Get('/main/algorithm/a')
  async mainAlgorithm(): Promise<Response> {
    console.log('mainAlgorithm all');
    try {
      const algoInfo: AlgorithmDto[] = await this.algorithmService.findAll();
      return new ResponseMessage().success().body(algoInfo).build();
    } catch (err) {
      Logger.error(err);
    }
  }


  // 메인 알고리즘 특정
  @Get('/main/algorithm/g/:code')
  async mainAlgorithmOne(@Param('code') code: string): Promise<Response> {
    console.log("mainAlgorithmOne code ::" + code);
    try {
      const algoInfo: AlgorithmDto = await this.algorithmService.findAlgorithm(code);
      // return new ResponseMessage().error(999, "Error").build();
      return new ResponseMessage().success().body(algoInfo).build();
    } catch (err) {
      Logger.error(err);
      return new ResponseMessage().error(999, "Error").build();
    }
  }

  // 메인 배너 전체
  @Get('/main/banner/a')
  async mainBanner(): Promise<Response> {
    console.log('mainBanner all');
    try {
      const bannerInfo: BannerDto[] = await this.bannerService.findAll();
      return new ResponseMessage().success().body(bannerInfo).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 메인 배너 특정
  @Get('/main/banner/g/:no')
  async mainBannerOne(@Param('no') no: number): Promise<Response> {
    console.log("mainBannerOne no ::" + no);
    try {
      const bannerInfo: BannerDto = await this.bannerService.findTodayBanner(no);
      // return new ResponseMessage().error(999, "Error").build();
      return new ResponseMessage().success().body(bannerInfo).build();
    } catch (err) {
      Logger.error(err);
      return new ResponseMessage().error(999, "Error").build();
    }
  }

  // 메인 공지
  @Get('/main/notice/a')
  async mainNotice(): Promise<Response> {
    console.log('mainNtice all');
    try {
      const noticeInfo: NoticeDto[] = await this.noticeService.findAll();
      return new ResponseMessage().success().body(noticeInfo).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 메인 공지 특정
  @Get('/main/notice/g/:no')
  async mainNoticeOne(@Param('no') no: number): Promise<Response> {
    console.log("mainNoticeOne no ::" + no);
    try {
      const noticeInfo: NoticeDto = await this.noticeService.findTodayNotice(no);
      // return new ResponseMessage().error(999, "Error").build();
      return new ResponseMessage().success().body(noticeInfo).build();
    } catch (err) {
      Logger.error(err);
      return new ResponseMessage().error(999, "Error").build();
    }
  }

  // 카카오톡 로그인 콜백
  @Get('/kakao/login')
  async kakaoLogin(): Promise<Response> {
    console.log('kakao call back');
    try {
      return new ResponseMessage().success().body("test").build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 포트폴리오 전체
  @Get('/portfolio/a')
  async agPortfolioAll(): Promise<Response> {
    console.log('agPortfolioAll');
    try {
      const agPortfolio: AgPortfolioDto[] = await this.agPortfolioService.findAll();
      return new ResponseMessage().success().body(agPortfolio).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 포트폴리오 종류별(get 방식)
  @Get('/portfolio/type/g/:agType/:column/:order')
  async agPortfolioType(@Param('agType') type: string, @Param('column') column?: string, @Param('order') order?: string): Promise<Response> {
    console.log(`agPortfolioType ::${type}::${column}::${order}`);
    try {
      const agPortfolio: AgPortfolioDto[] = await this.agPortfolioService.findPortfolioTypeOrder(type, column, order);
      return new ResponseMessage().success().body(agPortfolio).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 포트폴리오 종류별(post 방식)
  @Post('/portfolio/type/p')
  async agPortfolioTypePost(@Body() portfolio:AgPortfolioDto): Promise<Response> {
    console.log(`agPortfolioType ::${portfolio}`);
    try {
      const agPortfolio: AgPortfolioDto[] = await this.agPortfolioService.findPortfolioTypePost(portfolio);
      return new ResponseMessage().success().body(agPortfolio).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  // 포트폴리오 get id
  @Get('/portfolio/id/g/:id')
  async agPortfolioId(@Param('id') id: number): Promise<Response> {
    console.log('agPortfolioId');
    try {
      const agPortfolio: AgPortfolioDto = await this.agPortfolioService.findPortfolioId(id);
      return new ResponseMessage().success().body(agPortfolio).build();
    } catch (err) {
      Logger.error(err);
    }
  }

}
