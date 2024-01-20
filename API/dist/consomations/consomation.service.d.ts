import { Repository } from 'typeorm';
import { Consomation } from './entities/Consomation.entity';
import { CreateConsomationDto } from './dto/create-consomation.dto';
export declare class ConsomationService {
    private readonly consomationRepository;
    constructor(consomationRepository: Repository<Consomation>);
    findAll(): Promise<Consomation[]>;
    read(id: number): Promise<Consomation>;
    create(createConsomationDto: CreateConsomationDto): Promise<Consomation>;
    update(id: number, data: Partial<CreateConsomationDto>): Promise<Consomation>;
    delete(id: number): Promise<Consomation>;
}
