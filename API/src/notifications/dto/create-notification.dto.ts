import { IsString ,IsInt, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateNotificationDto {
    @ApiProperty({
    required:false,
    type:'number',
    })
    readonly id: number;
    readonly message: string;
    @ApiProperty({
        required:true,
        type:'string',
        })
        @IsString()
        @IsNotEmpty()
    readonly status: string;
    readonly userId: number;
}
