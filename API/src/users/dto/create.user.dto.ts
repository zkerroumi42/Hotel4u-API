import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { Role } from "src/auth/interface/Role";
export class CreateUserDto {
    readonly id: number;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly nom: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly prenom: string;


    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly email: string;
    @IsNotEmpty()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly password: string;
    @IsNotEmpty()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly role: Role;

    @IsNotEmpty()
    @Length(10,16)
    @Matches(/^(\+|00)?212[ \-]?(6|7)([ \-]?\d){8}$/, {
        message: 'Invalid Moroccan phone number format',
      })
   //exemple de test : +212-6-12345678
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly phoneNumber: string;

}