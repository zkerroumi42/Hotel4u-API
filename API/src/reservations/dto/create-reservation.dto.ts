import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {

    readonly id: number;
    @ApiProperty({
    required:true,
    type:'number',
    })
    @IsInt()
    readonly num_conf: number;
    @ApiProperty({
        required:true,
        type:'string',
        })
        @IsString()
    readonly date_arr: string;
    @ApiProperty({
        required:true,
        type:'string',
        })
        @IsString()
    readonly date_dep: string;
    @ApiProperty({
        required:true,
        type:'string',
        })
        @IsString()
    readonly date_payer: string;
    @ApiProperty({
        required:true,
        type:'number',
        })
        @IsInt()
    readonly montant: number;

    @ApiProperty({
        required:true,
        type:'number',
        })
        @IsInt()
    readonly Nb_person: number;
    @ApiProperty({
        required:true,
        type:'number',
        })
        @IsInt()
     clientId: number;
    @ApiProperty({
        required:true,
        type:'number',
        })
        @IsInt()
     chambreId: number;
}
