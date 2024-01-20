import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateConsomationDto {
   
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
    readonly name: string;

    @ApiProperty({
        required:false,
        type:'number',
        })
        @IsInt()
        readonly prix: number;

        @ApiProperty({
            required:true,
            type:'number',
            })
            @IsInt()
         clientId: number;
}
