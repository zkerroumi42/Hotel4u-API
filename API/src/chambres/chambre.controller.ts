import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { ChambreService } from './chambre.service';
import { Chambre } from './entities/chambre.entity';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/chambres')
export class ChambreController {
  constructor(private readonly chambreService: ChambreService) {}


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des chambre',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Chambre[]> {
      return await this.chambreService.findAll();
    }


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.chambreService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('create')
    create(@Body() createChambreDto: CreateChambreDto): Promise<Chambre> {
    return this.chambreService.create(createChambreDto);
    }

    // @Roles('Admin')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateChambreDto: CreateChambreDto): Promise<Chambre> {
      return this.chambreService.update(id, updateChambreDto);
    }


    // @Roles('User')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Chambre> {
      return this.chambreService.delete(id);
    }

}
