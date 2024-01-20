import { VilleService } from './ville.service';
import { Ville } from './entities/ville.entity';
import { CreateVilleDto } from './dto/create-ville.dto';
export declare class VilleController {
    private readonly villeService;
    constructor(villeService: VilleService);
    findAll(): Promise<Ville[]>;
    getByid(id: number): Promise<Ville>;
    create(createVilleDto: CreateVilleDto): Promise<Ville>;
    update(id: number, updatevilleDto: CreateVilleDto): Promise<Ville>;
    delete(id: number): Promise<Ville>;
}
