import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { JwtAuthGuard } from './jwt.guard';
import { Roles } from './roles/roles.decorator';
import { RoleGuard } from './role/role.guard';
import { IAuthenticate } from './interface/Role';
 

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}


    @Post()
    async login(@Body() authenticateDto: AuthenticateDto):Promise<IAuthenticate> {
      return  await this.authService.authenticate(authenticateDto);
    }

    @Roles('User')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    profile(@Req() req, @Res() res) {
      return res.status(HttpStatus.OK).json(req.user);
    }
  

}
