import { Repository } from 'typeorm';
import { Chambre } from './entities/chambre.entity';
import { CreateChambreDto } from './dto/create-chambre.dto';
export declare class ChambreService {
    private readonly ChambreRepository;
    constructor(ChambreRepository: Repository<Chambre>);
    findAll(): Promise<Chambre[]>;
    read(id: number): Promise<Chambre>;
    count(): Promise<number>;
    create(createChambrelDto: CreateChambreDto): Promise<Chambre>;
    update(id: number, data: Partial<CreateChambreDto>): Promise<Chambre>;
    delete(id: number): Promise<Chambre>;
}
