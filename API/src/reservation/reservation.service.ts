import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';


@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}


  async findAll() : Promise<Reservation[]> {
    return await this.reservationRepository.find();
  }

  async read(id:number): Promise<Reservation>{
  return await this.reservationRepository.findOne({where: {id,}});
  }

  async create(createvillelDto: CreateReservationDto) {
        const villeentity=new Reservation();
        villeentity.name=createvillelDto.name;
        const hotel=this.reservationRepository.create(villeentity);
        await this.reservationRepository.save(villeentity);
        return hotel;
  }

  async update(id :number ,data:Partial<CreateReservationDto>){
  await this.reservationRepository.update({id},data);
  const hotel= await this.reservationRepository.findOne({where: {id}});
  return hotel;
  }

  async delete(id:number){
    const hotel= await this.reservationRepository.findOne({where: {id}});
    await this.reservationRepository.delete(hotel);
    return hotel;
  }

}
