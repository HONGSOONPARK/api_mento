import { IsNumber, IsOptional, IsString } from "class-validator";

export class InfoDto{
    @IsNumber()
    readonly no: number;

    @IsString()
    readonly name: string;
}
