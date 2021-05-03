import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class BannerDto{
    @IsNumber()
    readonly no: number;

    @IsOptional()
    @IsString()
    readonly screen: string;

    @IsOptional()
    @IsString()
    readonly code: string;

    @IsOptional()
    @IsString()
    readonly codeName: string;

    @IsOptional()
    @IsString()
    readonly explain: string;

    @IsOptional()
    @IsString()
    readonly urlPath: string;

    @IsOptional()
    @IsString()
    readonly useYn: string;

    @IsOptional()
    @IsString()
    readonly startDate: string;

    @IsOptional()
    @IsString()
    readonly endDate: string;

    @IsOptional()
    @IsString()
    readonly updateDate: Date;

}






