import { IsString ,IsInt, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateChambreDto {
    readonly id: number;
    @ApiProperty({
    required:true,
    type:'string',
    })
    @IsString()
    readonly type: string;
    @ApiProperty({
        required:false,
        type:'number',
        })
        @IsInt()
    readonly Nb_max: number;


    @ApiProperty({
        required:false,
        type:'number',
        })
    @IsInt()    
    readonly hotelId: number;
}
