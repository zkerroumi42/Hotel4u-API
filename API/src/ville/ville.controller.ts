import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { VilleService } from './ville.service';
import { Ville } from './entities/ville.entity';
import { CreateVilleDto } from './dto/create-ville.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/ville')
export class VilleController {
  constructor(private readonly villelService: VilleService) {}


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  @ApiResponse({
  status:201,
  description:'la liste des villes',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Ville[]> {
      return await this.villelService.findAll();
    }


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async getByid(@Param('id') id: number) {
  return await this.villelService.read(id);
  }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
   @Post()
    create(@Body() createVilleDto: CreateVilleDto): Promise<Ville> {
    return this.villelService.create(createVilleDto);
    }

    @Roles('Admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatevilleDto: CreateVilleDto): Promise<Ville> {
      return this.villelService.update(id, updatevilleDto);
    }


    @Roles('User')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Ville> {
      return this.villelService.delete(id);
    }

}
