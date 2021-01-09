import { Injectable } from '@nestjs/common';
@Injectable()
export class ApiService {

    private appInfo:string;

    getAppInfo(): string {
        return this.appInfo;
    }


}
