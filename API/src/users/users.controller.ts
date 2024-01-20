import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post,Delete, Req, Res, UseGuards, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { NotificationService } from "src/notifications/notification.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly notificationService: NotificationService,
    // private readonly authService: AuthService,
    ) {}

  
  //  @Roles('Admin')
  //  @UseGuards(JwtAuthGuard, RoleGuard)
   @Get('list')
   async findAll(): Promise<User[]> {
    this.notificationService.createnotification(`lists tout users`,"Non read",1);
     return this.usersService.findAll();
   }

   //  @Roles('Admin')
  //  @UseGuards(JwtAuthGuard, RoleGuard)
   @Get('/profile/read/:id')
   async getByid(@Param('id') id: number) {
   return await this.usersService.read(id);
   }
   

  //  @Roles('Admin')
  //  @UseGuards(JwtAuthGuard, RoleGuard)
   @Patch('profile/update/:id')
   update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto): Promise<User> {
     return this.usersService.update(id, updateUserDto);
   }

  //  @Roles('User')
  //  @UseGuards(JwtAuthGuard, RoleGuard)
   @Delete('/profile/delete/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id') id: number): Promise<User> {
     return this.usersService.delete(id);
   }

   @Post('profile/changePassword')
   @HttpCode(HttpStatus.OK)
   async forgetPassword(@Body() changePasswordDto: ChangePasswordDto): Promise<void> {
      const user=await this.usersService.findOneByEmail(changePasswordDto.email);
      
     if (changePasswordDto.newpassword === changePasswordDto.confirmPassword) {
       await this.notificationService.createnotification(`${changePasswordDto.email} changé password  avec succes`,"No read yet",user.id);
       return await this.usersService.changePassword(changePasswordDto.email, changePasswordDto.newpassword);
     } else {
       throw new NotFoundException('Confirmation du mot de passe échouée.');
     }
   }

 

 

}

