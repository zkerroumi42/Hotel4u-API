import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { User } from 'src/users/entities/user.entity';
import { Chambre } from 'src/chambres/entities/chambre.entity';


@Injectable()
export class ReservationService {

  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}


  async findAll() : Promise<Reservation[]> {
    return await this.reservationRepository.find({relations: ['client','chambre']});
  }

  async read(id:number): Promise<Reservation>{
  return await this.reservationRepository.findOne({where: {id,},relations: ['client','chambre']});
  }

  async count(){
    return await this.reservationRepository.count();
  }

  async create(createReservationDto: CreateReservationDto) {
        const reservationentity=new Reservation();
        reservationentity.num_conf=createReservationDto.num_conf;
        reservationentity.date_arr=createReservationDto.date_arr;
        reservationentity.date_dep=createReservationDto.date_dep;
        reservationentity.date_payer=createReservationDto.date_payer;
        reservationentity.montant=createReservationDto.montant;
        reservationentity.Nb_person=createReservationDto.Nb_person;

    if (createReservationDto.clientId) {
        const client = new User(); 
        client.id = createReservationDto.clientId;
        reservationentity.client = client;
    }

    if (createReservationDto.chambreId) {
      const chambre = new Chambre(); 
      chambre.id = createReservationDto.chambreId;
      reservationentity.chambre = chambre;
  }

    const reservation=this.reservationRepository.create(reservationentity);
    await this.reservationRepository.save(reservationentity);
    return reservation;
}


async update(id: number, data: Partial<CreateReservationDto>) {
  const updateData: Partial<Reservation> = {};

  if (data.clientId) {
      const client = new User();
      client.id = data.clientId;
      updateData.client = client;
      delete data.clientId;
  }

  if (data.chambreId) {
      const chambre = new Chambre();
      chambre.id = data.chambreId;
      updateData.chambre = chambre;
      delete data.chambreId;
  }

  await this.reservationRepository.update({ id }, { ...data, ...updateData });

  const reservation = await this.reservationRepository.findOne({ where: { id } });
  return reservation;

}

  async delete(id:number){
    const hotel= await this.reservationRepository.findOne({where: {id},relations: ['client','chambre']});
    await this.reservationRepository.delete(hotel);
    return hotel;
  }

}
