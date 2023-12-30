import { ChambreService } from './chambre.service';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';
export declare class ChambreController {
    private readonly chambreService;
    constructor(chambreService: ChambreService);
    create(createChambreDto: CreateChambreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChambreDto: UpdateChambreDto): string;
    remove(id: string): string;
}
