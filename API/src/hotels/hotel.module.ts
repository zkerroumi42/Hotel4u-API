import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Ville } from 'src/villes/entities/ville.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Hotel,Ville]),],
  controllers: [HotelController],
  providers: [HotelService],
})

export class HotelModule {}
