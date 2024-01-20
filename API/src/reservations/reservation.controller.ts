import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { ReservationService } from './reservation.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';



@Controller('api/reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des reservations',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Reservation[]> {
      return await this.reservationService.findAll();
    }

  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.reservationService.read(id);
  }

  // reserver 
   @Post('create')
    create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
    return this.reservationService.create(createReservationDto);
    }

    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateReservationDto: CreateReservationDto): Promise<Reservation> {
      return this.reservationService.update(id, updateReservationDto);
    }


    @Delete('annuler/:id')
    delete(@Param('id') id: number): Promise<Reservation> {
      return this.reservationService.delete(id);
    }

}
