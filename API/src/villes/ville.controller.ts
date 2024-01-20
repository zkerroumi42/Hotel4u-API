import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { VilleService } from './ville.service';
import { Ville } from './entities/ville.entity';
import { CreateVilleDto } from './dto/create-ville.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/villes')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des villes',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Ville[]> {
      return await this.villeService.findAll();
    }


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.villeService.read(id);
  }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
   @Post("create")
    create(@Body() createVilleDto: CreateVilleDto): Promise<Ville> {
    return this.villeService.create(createVilleDto);
    }

    // @Roles('Admin')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updatevilleDto: CreateVilleDto): Promise<Ville> {
      return this.villeService.update(id, updatevilleDto);
    }


    // @Roles('User')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Ville> {
      return this.villeService.delete(id);
    }

}
