import { IsString ,IsInt,IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateHotelDto {
    @IsNotEmpty()
    @ApiProperty({
    required:false,
    type:'number',
    })
   //
    @IsInt()
    readonly id: number;
    @ApiProperty({
    required:true,
    type:'string',
    })
    @IsString()
    readonly name: string;
    @ApiProperty({
    required:true,
    type:'string',
    })
    @IsEmail()
    readonly email: string;
     @ApiProperty({
        required:false,
        type:'string',
        })

    @IsString()
    readonly telephone: string;
     @ApiProperty({
        required:false,
        type:'string',
        })
    @IsString()
    readonly logo: string;
     @ApiProperty({
        required:false,
        type:'string',
        })
    @IsString()
    readonly facebook: string;
     @ApiProperty({
        required:false,
        type:'string',
        })
    @IsString()
    readonly instagrame: string;
     @ApiProperty({
        required:false,
        type:'string',
        })
    @IsString()
    readonly youtube: string;
     @ApiProperty({
        required:false,
        type:'number',
        })
    @IsInt()
    readonly longitude:number;
     @ApiProperty({
        required:false,
        type:'number',
        })
    @IsInt()
    readonly latitude:number;
}
