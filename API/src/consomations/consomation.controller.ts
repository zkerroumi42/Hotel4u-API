import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'

import { CreateConsomationDto } from './dto/create-consomation.dto';
import { Consomation } from './entities/Consomation.entity';
import { ConsomationService } from './consomation.service';




@Controller('api/consomations')

export class ConsomationController {
  constructor(private readonly consomationService: ConsomationService) {}

  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des consomations',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Consomation[]> {
      return await this.consomationService.findAll();
    }

  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.consomationService.read(id);
  }

   @Post('create')
    create(@Body() createReservationDto: CreateConsomationDto): Promise<Consomation> {
    return this.consomationService.create(createReservationDto);
    }


    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateReservationDto: CreateConsomationDto): Promise<Consomation> {
      return this.consomationService.update(id, updateReservationDto);
    }


    @Delete('annuler/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Consomation> {
      return this.consomationService.delete(id);
    }

}
