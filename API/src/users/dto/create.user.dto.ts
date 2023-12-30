import { IsEmail, IsInt, IsNotEmpty, IsString, Matches } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { Role } from "src/auth/interface/Role";
export class CreateUserDto {
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        required:false,
        type:'number',
        })
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
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly userName: string;
    @IsNotEmpty()
    // @Length( , )
    // @Matches()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly password: string;
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
    readonly role: Role;

    @IsNotEmpty()
    @ApiProperty({
        required:true,
        type:'string',
        })
    readonly userUUID: string;

}