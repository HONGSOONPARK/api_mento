import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class BannerDto{
    @IsNumber()
    readonly seq: number;

    @IsOptional()
    @IsString()
    readonly screen: string;

    @IsOptional()
    @IsString()
    readonly code: string;

    @IsOptional()
    @IsString()
    readonly code_name: string;

    @IsOptional()
    @IsString()
    readonly explain: string;

    @IsOptional()
    @IsString()
    readonly url_path: string;

    @IsOptional()
    @IsString()
    readonly use_yn: string;

    @IsOptional()
    @IsString()
    readonly start_date: string;

    @IsOptional()
    @IsString()
    readonly end_date: string;

    @IsOptional()
    @IsString()
    readonly create_time: Date;

}






