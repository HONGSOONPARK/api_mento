import { IsNumber, IsOptional, IsString } from "class-validator";

export class AppInfoDto{
    @IsNumber()
    readonly no: number;

    @IsString()
    readonly appName: string;
}
