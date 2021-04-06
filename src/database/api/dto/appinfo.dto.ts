import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class AppInfoDto{
    @IsNumber()
    readonly no: number;

    @IsString()
    readonly package: string;

    @IsString()
    readonly appName: string;

    @IsString()
    @IsByteLength(10)
    readonly aosMinVersion: string;

    @IsString()
    readonly aosMarketVersion: string;

    @IsString()
    readonly iosMinVersion: string;

    @IsString()
    readonly iosMarketVersion: string;

    @IsString()
    readonly updateDate: Date;
    


}






