import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { Info } from './entities/info.entity';

@Controller('info' )
export class InfoController {

    constructor(private readonly infoService: InfoService) {}

    @Get('get')
    getInfo(): Promise<Info[]> {
      return this.infoService.findAll();
    }

}


