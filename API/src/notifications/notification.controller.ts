import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';




@Controller('api/notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des Notifications',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Notification[]> {
      return await this.notificationService.findAll();
    }


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.notificationService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('create')
    create(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationService.create(createNotificationDto);
    }

    // @Roles('Admin')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateNotificationDto: CreateNotificationDto): Promise<Notification> {
      return this.notificationService.update(id, updateNotificationDto);
    }

    // @Roles('User')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Notification> {
      return this.notificationService.delete(id);
    }

}
