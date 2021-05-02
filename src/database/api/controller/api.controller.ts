import { Controller, Get, Param, Post, Body, Patch, Put, Logger } from '@nestjs/common';
import { AppInfoDto } from '../dto/appinfo.dto';
import { PushInfoDto } from '../dto/pushinfo.dto';
import { AppInfo } from '../entities/appinfo.entity';
import { PushInfo } from '../entities/pushinfo.entity';
import { ApiService } from '../service/api.service';
import { AppInfoService } from '../service/appinfo.service';
import { PushInfoService } from '../service/pushinfo.service';
import { Response, ResponseMessage } from '../utils/response.utils';

@Controller('api')
export class ApiController {

    constructor(
        private readonly apiService: ApiService, 
        private readonly appInfoService: AppInfoService,
        private readonly pushInfoService: PushInfoService
        ){}

    @Get()
    getRoot(): string{
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
      console.log("name ::" +appName);
      try{
        const appInfo:AppInfoDto = await this.appInfoService.findAppName(appName);  
        // return new ResponseMessage().error(999, "Error").build();
        return new ResponseMessage().success().body(appInfo).build();
      } catch (err){
        Logger.error(err);
      }
    }

    // FCM 토큰 정보 갖고 오기
    @Get('/pushinfo/g/:token')
    async pushInfoOne(@Param('token') token: string): Promise<Response> {
      console.log("token ::" +token);
      try{
        const pushInfo:PushInfoDto = await this.pushInfoService.findFcmToken(token);  
        // return new ResponseMessage().error(999, "Error").build();
        return new ResponseMessage().success().body(pushInfo).build();
      } catch (err){
        Logger.error(err);
        return new ResponseMessage().error(999, "Error").build();
      }
    }

    // FCM 토큰 정보 insert/update
    @Post('/pushinfo/m')
    async pushInfoMerge(@Body() info: PushInfoDto) : Promise<Response>{
      try{
        const pushInfo:PushInfoDto = await this.pushInfoService.mergePushInfo(info);
        return new ResponseMessage().success().body(pushInfo).build();
      } catch (err){
          Logger.error(err);
      }
    }


    // 카카오톡 로그인 콜백
    @Get('/kakao/login')
    async kakaoLogin() : Promise<Response>{
      console.log('kakao call back');
      try{
        return new ResponseMessage().success().body("test").build();
      } catch (err){
        Logger.error(err);
      }
    }

}
