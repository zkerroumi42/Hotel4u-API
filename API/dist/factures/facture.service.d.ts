import { Repository } from 'typeorm';
import { Facture } from './entities/facture.entity';
import { CreateFactureDto } from './dto/create-facture.dto';
import { Payment } from 'src/payment/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
export declare class FactureService {
    private readonly factureRepository;
    private readonly PaymentRepository;
    private readonly UserRepository;
    constructor(factureRepository: Repository<Facture>, PaymentRepository: Repository<Payment>, UserRepository: Repository<User>);
    findAll(): Promise<Facture[]>;
    read(id: number): Promise<Facture>;
    create(createFactureDto: CreateFactureDto): Promise<Facture>;
    update(id: number, data: Partial<CreateFactureDto>): Promise<Facture>;
    delete(id: number): Promise<Facture>;
}
