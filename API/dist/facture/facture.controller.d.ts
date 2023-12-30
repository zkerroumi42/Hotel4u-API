import { CreateFactureDto } from './dto/create-facture.dto';
import { Facture } from './entities/facture.entity';
import { FactureService } from './facture.service';
export declare class FactureController {
    private readonly factureService;
    constructor(factureService: FactureService);
    findAll(): Promise<Facture[]>;
    getByid(id: number): Promise<Facture>;
    create(createReservationDto: CreateFactureDto): Promise<Facture>;
    update(id: number, updateReservationDto: CreateFactureDto): Promise<Facture>;
    delete(id: number): Promise<Facture>;
}
