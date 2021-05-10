import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class AlgorithmDto{
    @IsNumber()
    readonly seq: number;

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
    @IsNumber()
    readonly earning_late: number;

    @IsOptional()
    @IsNumber()
    readonly earning_average: number;

    @IsOptional()
    @IsNumber()
    readonly standard_deviation: number;

    @IsOptional()
    @IsString()
    readonly holding_period: string;

    @IsOptional()
    @IsString()
    readonly create_time: Date;

}






