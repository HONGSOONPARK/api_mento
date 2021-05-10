import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class AppInfoDto{
    @IsNumber()
    readonly seq: number;

    @IsString()
    readonly app_name: string;

    @IsString()
    readonly aos_package: string;
    
    @IsString()
    readonly ios_package: string;

    @IsString()
    @IsByteLength(10)
    readonly aos_min_version: string;

    @IsString()
    readonly aos_market_version: string;

    @IsString()
    readonly ios_min_version: string;

    @IsString()
    readonly ios_market_version: string;

    @IsString()
    readonly create_time: Date;
    


}






