import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class PushInfoDto{
    @IsString()
    readonly fcmToken: string;

    @IsOptional()
    @IsString()
    readonly accountId: string;

    @IsOptional()
    @IsString()
    readonly pushYn: string;

    @IsOptional()
    @IsString()
    readonly updateDate: Date;

    toString(): string{
        return this.fcmToken+"|"+this.accountId+"|"+this.pushYn+"|"+this.updateDate;
    }

}






