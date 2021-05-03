import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class AlgorithmDto{
    @IsNumber()
    readonly no: number;

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
    @IsNumber()
    readonly earningLate: number;

    @IsOptional()
    @IsNumber()
    readonly earningAverage: number;

    @IsOptional()
    @IsNumber()
    readonly standardDeviation: number;

    @IsOptional()
    @IsString()
    readonly holdingPeriod: string;

    @IsOptional()
    @IsString()
    readonly updateDate: Date;

}






