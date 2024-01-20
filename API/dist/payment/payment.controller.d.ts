import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<Payment[]>;
    getByid(id: number): Promise<Payment>;
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    update(id: number, updatePaymentDto: CreatePaymentDto): Promise<Payment>;
    delete(id: number): Promise<Payment>;
}
