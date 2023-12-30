import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';

@Controller('api/chambre')
export class ChambreController {
  constructor(private readonly chambreService: ChambreService) {}

  @Post()
  create(@Body() createChambreDto: CreateChambreDto) {
    return this.chambreService.create(createChambreDto);
  }

  @Get()
  findAll() {
    return this.chambreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chambreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChambreDto: UpdateChambreDto) {
    return this.chambreService.update(+id, updateChambreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chambreService.remove(+id);
  }
}
