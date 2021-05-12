import { IsByteLength, IsNumber, IsOptional, IsString } from "class-validator";

export class PushInfoDto{
    @IsString()
    readonly fcm_token: string;

    @IsOptional()
    @IsString()
    readonly user_seq: number;

    @IsOptional()
    @IsString()
    readonly push_yn: string;

    @IsOptional()
    @IsString()
    readonly os: string;

    @IsOptional()
    @IsString()
    readonly create_time: Date;

    toString(): string{
        return this.fcm_token+"|"+this.user_seq+"|"+this.push_yn+"|"+this.os+"|"+this.create_time;
    }

}






