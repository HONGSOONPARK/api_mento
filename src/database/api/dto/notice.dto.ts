import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class NoticeDto{
    @IsNumber()
    readonly no: number;

    @IsOptional()
    @IsString()
    readonly period: string;

    @IsOptional()
    @IsNumber()
    readonly earningLate: number;

    @IsOptional()
    @IsNumber()
    readonly cost: number;

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






