import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from "@nestjs/common";
 
import { Roles } from "src/auth/roles/roles.decorator"; 
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/jwt.guard";
import { RoleGuard } from "src/auth/role/role.guard";
import { CreateUserDto } from "./dto/create.user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
   @Get()
   async findAll(): Promise<User[]> {
     return this.usersService.findAll();
   }



   @Post('login')
   @HttpCode(HttpStatus.OK)
   signIn(@Body() signInDto: Record<string, any>) {
   return this.usersService.signIn(signInDto.userName, signInDto.password);
   }
   
   @Post('register')
   @HttpCode(HttpStatus.OK)
   async register(@Body() createUserDto: CreateUserDto):Promise<User>{
     return await this.usersService.register(createUserDto);
   }
 
  

  @Post()
  async create(@Body() user): Promise<User> {
    return this.usersService.create(user);
  }


  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('profile')
  profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
 
}

