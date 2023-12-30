import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFactureDto {
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
}
