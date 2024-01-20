import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate } from './interface/Role';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { UsersService } from 'src/users/users.service';
import { NotificationService } from 'src/notifications/notification.service';
import { User } from 'src/users/entities/user.entity';
import { ForgotPasswordDto } from 'src/users/dto/forgot-password.dto';
 

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly usersService: UsersService,
        private readonly notificationService: NotificationService

        ) {}



   // authentification
   @Post('register')
   @HttpCode(HttpStatus.OK)
   async register(@Body() createUserDto: CreateUserDto):Promise<User>{
     const user= await this.usersService.register(createUserDto);
     this.notificationService.createnotification(`${createUserDto.nom,createUserDto.prenom }create avec succes`,"not read yet",1);
     return user;

   }

   @Post('login')
   @HttpCode(HttpStatus.OK)
    async login(@Body() authenticateDto: AuthenticateDto,@Res() res):Promise<IAuthenticate> {
        const user=  await this.authService.authenticate(authenticateDto);
        await this.notificationService.createnotification(`${authenticateDto.email}login avec succes`,"Non read",1);

        // Set the cookie
        res.cookie('access_token', user.token, { httpOnly: true, maxAge: 3600000 }); 
        res.json({ message: 'Login successful' });
        return user;
    } 

    // Password
    @Post('ChangePassword')
    @HttpCode(HttpStatus.OK)
    async forgetPassword(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<void> {
      if (forgotPasswordDto.newpassword === forgotPasswordDto.confirmPassword) {
        await this.notificationService.createnotification(`${forgotPasswordDto.email} changé password  avec succes`,"No read yet",1);
        return await this.usersService.changePassword(forgotPasswordDto.email, forgotPasswordDto.newpassword);
      } else {
        throw new NotFoundException('Confirmation du mot de passe échouée.');
      }
    }

    @Post('logout')
    async logout(@Res() res) {
    // Clear the cookie
    res.clearCookie('access_token');
    await this.notificationService.createnotification(`utilisateur  logout avec succes`,"No read yet",1);
    res.status(HttpStatus.OK).json({ message: 'Logout successful' });
   }


      // Password
      @Post('forgotPassword')
      @HttpCode(HttpStatus.OK)
      async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<void> {
        await this.usersService.forgotPassword(forgotPasswordDto.email);   
      }
  

}
