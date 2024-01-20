import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}


  async findAll() : Promise<Payment[]> {
    return await this.paymentRepository.find();
  }

  async read(id:number): Promise<Payment>{
  return await this.paymentRepository.findOne({where: {id,}});
  }

  async create(createPaymentlDto: CreatePaymentDto) {
        const paymententity=new Payment();
        paymententity.type=createPaymentlDto.type;
        const payment=this.paymentRepository.create(paymententity);
        await this.paymentRepository.save(paymententity);
        return payment;
  }

  async update(id :number ,data:Partial<CreatePaymentDto>){
  await this.paymentRepository.update({id},data);
  const payment= await this.paymentRepository.findOne({where: {id}});
  return payment;
  }

  async delete(id:number){
    const payment= await this.paymentRepository.findOne({where: {id}});
    await this.paymentRepository.delete(payment);
    return payment;
  }

}
