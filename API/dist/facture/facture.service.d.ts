import { Repository } from 'typeorm';
import { Facture } from './entities/facture.entity';
import { CreateFactureDto } from './dto/create-facture.dto';
export declare class FactureService {
    private readonly factureRepository;
    constructor(factureRepository: Repository<Facture>);
    findAll(): Promise<Facture[]>;
    read(id: number): Promise<Facture>;
    create(createvillelDto: CreateFactureDto): Promise<Facture>;
    update(id: number, data: Partial<CreateFactureDto>): Promise<Facture>;
    delete(id: number): Promise<Facture>;
}
