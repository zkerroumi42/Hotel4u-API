import { IsString ,IsInt, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class CreateCommentDto {
    @ApiProperty({
    required:false,
    type:'number',
    })
    readonly id: number;
    @ApiProperty({
    required:true,
    type:'string',
    })
    @IsString()
    readonly comment: string;
    @IsNotEmpty()
    reservationId: number;
}
