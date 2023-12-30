import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'

import { CreateFactureDto } from './dto/create-facture.dto';
import { Facture } from './entities/facture.entity';
import { FactureService } from './facture.service';




@Controller('api/facture')

export class FactureController {
  constructor(private readonly factureService: FactureService) {}

  @Get()
  @ApiResponse({
  status:201,
  description:'la liste des factures',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Facture[]> {
      return await this.factureService.findAll();
    }

  @Get(':id')
  async getByid(@Param('id') id: number) {
  return await this.factureService.read(id);
  }

   @Post()
    create(@Body() createReservationDto: CreateFactureDto): Promise<Facture> {
    return this.factureService.create(createReservationDto);
    }


    @Patch(':id')
    update(@Param('id') id: number, @Body() updateReservationDto: CreateFactureDto): Promise<Facture> {
      return this.factureService.update(id, updateReservationDto);
    }


    @Delete(':id')
    delete(@Param('id') id: number): Promise<Facture> {
      return this.factureService.delete(id);
    }

}
