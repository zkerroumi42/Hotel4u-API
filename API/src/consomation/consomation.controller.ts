import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'

import { CreateConsomationDto } from './dto/create-consomation.dto';
import { Consomation } from './entities/Consomation.entity';
import { ConsomationService } from './consomation.service';




@Controller('api/consomation')

export class ConsomationController {
  constructor(private readonly consomationService: ConsomationService) {}

  @Get()
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

  @Get(':id')
  async getByid(@Param('id') id: number) {
  return await this.consomationService.read(id);
  }

   @Post()
    create(@Body() createReservationDto: CreateConsomationDto): Promise<Consomation> {
    return this.consomationService.create(createReservationDto);
    }


    @Patch(':id')
    update(@Param('id') id: number, @Body() updateReservationDto: CreateConsomationDto): Promise<Consomation> {
      return this.consomationService.update(id, updateReservationDto);
    }


    @Delete(':id')
    delete(@Param('id') id: number): Promise<Consomation> {
      return this.consomationService.delete(id);
    }

}
