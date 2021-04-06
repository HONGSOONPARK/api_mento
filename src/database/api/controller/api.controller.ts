import { Controller, Get, Param } from '@nestjs/common';
import { AppInfo } from '../entities/appinfo.entity';
import { ApiService } from '../service/api.service';
import { AppInfoService } from '../service/appinfo.service';

@Controller('api')
export class ApiController {

    constructor(
        private readonly apiService: ApiService, 
        private readonly appInfoService: AppInfoService){}

    @Get()
    getRoot(): string{
        return this.apiService.getRoot();
    }

    // 앱 정보 전부 조회
    @Get('/appinfo/all')
    appInfoAll(): Promise<AppInfo[]> {
      return this.appInfoService.findAll();
    }

    // 앱 정보 
    @Get('/appinfo/get/:name')
    appInfoOne(@Param('name') appName: string): Promise<AppInfo> {
      return this.appInfoService.findAppName(appName);
    }


    



    // @Get("search")
    // search(@Query("year") searchingYear: string){
    //     return `We are searching for a movie made after:${searchingYear}`
    // }




}
