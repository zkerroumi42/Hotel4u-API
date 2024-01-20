import { Repository } from 'typeorm';
import { Ville } from './entities/ville.entity';
import { CreateVilleDto } from './dto/create-ville.dto';
export declare class VilleService {
    private readonly villeRepository;
    constructor(villeRepository: Repository<Ville>);
    findAll(): Promise<Ville[]>;
    read(id: number): Promise<Ville>;
    count(): Promise<number>;
    create(createvillelDto: CreateVilleDto): Promise<Ville>;
    update(id: number, data: Partial<CreateVilleDto>): Promise<Ville>;
    delete(id: number): Promise<Ville>;
}
