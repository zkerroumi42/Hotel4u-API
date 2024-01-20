import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Payment } from "src/payment/entities/payment.entity";
import { User } from "src/users/entities/user.entity";

export class CreateFactureDto {
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
        required: true,
        type: "number", 
    })
    @IsInt()

    paymentId: number;

    @ApiProperty({
        required: true,
        type: "number", 
    })
    @IsInt()
    reservationId: number;
}
