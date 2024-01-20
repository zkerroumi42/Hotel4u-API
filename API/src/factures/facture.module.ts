import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facture } from './entities/facture.entity';
import { FactureController } from './facture.controller';
import { FactureService } from './facture.service';
import { Payment } from 'src/payment/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Facture,Payment,User])],
  controllers: [FactureController],
  providers: [FactureService],
})
export class FactureModule {
  
}
