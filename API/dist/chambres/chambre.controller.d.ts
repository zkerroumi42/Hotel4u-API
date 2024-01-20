import { ChambreService } from './chambre.service';
import { Chambre } from './entities/chambre.entity';
import { CreateChambreDto } from './dto/create-chambre.dto';
export declare class ChambreController {
    private readonly chambreService;
    constructor(chambreService: ChambreService);
    findAll(): Promise<Chambre[]>;
    getByid(id: number): Promise<Chambre>;
    create(createChambreDto: CreateChambreDto): Promise<Chambre>;
    update(id: number, updateChambreDto: CreateChambreDto): Promise<Chambre>;
    delete(id: number): Promise<Chambre>;
}
