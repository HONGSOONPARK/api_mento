import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService){}

    @Get()
    getAppInfo(): string{
        return this.apiService.getAppInfo();
    }

    // @Get("search")
    // search(@Query("year") searchingYear: string){
    //     return `We are searching for a movie made after:${searchingYear}`
    // }




}
