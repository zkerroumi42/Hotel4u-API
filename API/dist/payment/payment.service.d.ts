import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentService {
    private readonly paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    findAll(): Promise<Payment[]>;
    read(id: number): Promise<Payment>;
    create(createPaymentlDto: CreatePaymentDto): Promise<Payment>;
    update(id: number, data: Partial<CreatePaymentDto>): Promise<Payment>;
    delete(id: number): Promise<Payment>;
}
