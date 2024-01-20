import { IsEmail, IsNotEmpty } from 'class-validator';

export class ForgotPasswordDto {
    @IsNotEmpty()
    email: string;

    newpassword:string;
    
    confirmPassword:string;
}