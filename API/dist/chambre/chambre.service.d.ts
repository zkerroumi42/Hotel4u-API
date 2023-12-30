import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';
export declare class ChambreService {
    create(createChambreDto: CreateChambreDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChambreDto: UpdateChambreDto): string;
    remove(id: number): string;
}
