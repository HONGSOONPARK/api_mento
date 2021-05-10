import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class NoticeDto{
    @IsNumber()
    readonly seq: number;

    @IsOptional()
    @IsString()
    readonly period: string;

    @IsOptional()
    @IsNumber()
    readonly earning_late: number;

    @IsOptional()
    @IsNumber()
    readonly cost: number;

    @IsOptional()
    @IsString()
    readonly start_date: string;

    @IsOptional()
    @IsString()
    readonly end_date: string;

    @IsOptional()
    @IsString()
    readonly cereate_time: Date;

}






