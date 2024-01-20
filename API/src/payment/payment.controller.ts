import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  @ApiResponse({
  status:201,
  description:'la liste des Payments',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Payment[]> {
      return await this.paymentService.findAll();
    }


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async getByid(@Param('id') id: number) {
  return await this.paymentService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('payer')
    create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(createPaymentDto);
    }

    @Roles('Admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePaymentDto: CreatePaymentDto): Promise<Payment> {
      return this.paymentService.update(id, updatePaymentDto);
    }


    @Roles('User')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('annuler/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Payment> {
      return this.paymentService.delete(id);
    }

}
