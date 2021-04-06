import { Injectable } from '@nestjs/common';
@Injectable()
export class ApiService {

    private appInfo:string;

    getRoot(): string {
        return 'API';
    }


}
