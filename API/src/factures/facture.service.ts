import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Facture} from './entities/facture.entity';
import { CreateFactureDto } from './dto/create-facture.dto';
import { Payment } from 'src/payment/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';


@Injectable()
export class FactureService {
  constructor(
    @InjectRepository(Facture)
    private readonly factureRepository: Repository<Facture>,
    @InjectRepository(Payment)
    private readonly PaymentRepository: Repository<Payment>,
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,  
  ) {}


  async findAll() : Promise<Facture[]> {
    return await this.factureRepository.find({relations: ['payment','reservation']});
  }

  async read(id:number): Promise<Facture>{
  return await this.factureRepository.findOne({where: {id,},relations: ['payment','reservation']});
  }

  async create(createFactureDto: CreateFactureDto) {
    const Factureentity=new Facture();
    Factureentity.name =createFactureDto.name ;
if (createFactureDto.paymentId) {
    const payment = new Payment(); 
    payment.id = createFactureDto.paymentId;
    Factureentity.payment = payment;
}

if (createFactureDto.reservationId) {
  const reservation = new Reservation(); 
  reservation.id = createFactureDto.reservationId;
  Factureentity.reservation = reservation;
}

const facture=this.factureRepository.create(Factureentity);
await this.factureRepository.save(Factureentity);
return facture;
}



async update(id: number, data: Partial<CreateFactureDto>) {
  const updateData: Partial<Facture> = {};

  if (data.reservationId) {
      const reservation = new Reservation();
      reservation.id = data.reservationId;
      updateData.reservation = reservation;
      delete data.reservationId;
  }

  if (data.paymentId) {
      const payment = new Payment();
      payment.id = data.paymentId;
      updateData.payment = payment;
      delete data.paymentId;
  }

  await this.factureRepository.update({ id }, { ...data, ...updateData });

  const facture = await this.factureRepository.findOne({ where: { id } });
  return facture;

}

  async delete(id:number){
    const facture= await this.factureRepository.findOne({where: {id},relations: ['payment','reservation']});
    await this.factureRepository.delete(facture);
    return facture;
  }

}
