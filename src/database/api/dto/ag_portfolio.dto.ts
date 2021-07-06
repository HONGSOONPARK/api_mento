import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class AgPortfolioDto{
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsNumber()
    @IsOptional()
    readonly p_seq: number;

    @IsOptional()
    @IsString()
    readonly ag_type: string;

    @IsOptional()
    @IsString()
    readonly code: string;

    @IsOptional()
    @IsNumber()
    readonly holding_day: number;

    @IsOptional()
    @IsString()
    readonly stock_name: string;

    @IsOptional()
    @IsNumber()
    readonly average_buy_price: number;

    @IsOptional()
    @IsNumber()
    readonly average_sell_price: number;

    @IsOptional()
    @IsString()
    readonly first_buy_date: string;

    @IsOptional()
    @IsString()
    readonly last_sell_date: string;

    @IsOptional()
    @IsString()
    readonly status: string;

    @IsOptional()
    @IsNumber()
    readonly cur_price: number;

    @IsOptional()
    @IsNumber()
    readonly rate: number;

    @IsOptional()
    @IsString()
    readonly column: string;

    @IsOptional()
    @IsString()
    readonly orderby: string;

}






