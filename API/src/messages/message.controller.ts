import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('recevoir')
  @ApiResponse({
  status:201,
  description:'la liste des Messages',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Message[]> {
      return await this.messageService.findAll();
    }


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('recevoir/:id')
  async getByid(@Param('id') id: number) {
  return await this.messageService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('envoyer')
    create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
    }

    // @Roles('Admin')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateMessageDto: CreateMessageDto): Promise<Message> {
      return this.messageService.update(id, updateMessageDto);
    }


    // @Roles('User')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Message> {
      return this.messageService.delete(id);
    }

}
