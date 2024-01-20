import { IsString ,IsInt, IsNotEmpty, IsDate} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";

export class CreateMessageDto {
    
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
    readonly message: string;
    @ApiProperty({
        required:true,
        type:'string',
        })
    @IsNotEmpty()
    readonly datetime: string;
    @ApiProperty({
        required:true,
        type:'string',
        })
        @IsString()
    readonly status: string;
    @IsNotEmpty()
     expediteurId:number;
    @IsNotEmpty()
     destinataireId:number;
}
