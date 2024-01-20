import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import {ApiResponse } from '@nestjs/swagger'
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';


@Controller('api/hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}


  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des hotels',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })

    async findAll() : Promise<Hotel[]> {
      return await this.hotelService.findAll();
    }


  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.hotelService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('create')
    create(@Body() CreateHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelService.create(CreateHotelDto);
    }


    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateHotelDto: CreateHotelDto): Promise<Hotel> {
      return this.hotelService.update(id, updateHotelDto);
    }


    @Delete('delete/:id')
    delete(@Param('id') id: number): Promise<Hotel> {
      return this.hotelService.delete(id);
    }

}
