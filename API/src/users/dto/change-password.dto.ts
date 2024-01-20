import { IsEmail, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    newpassword:string;
    @IsNotEmpty()
    confirmPassword:string;
}