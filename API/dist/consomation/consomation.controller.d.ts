import { CreateConsomationDto } from './dto/create-consomation.dto';
import { Consomation } from './entities/Consomation.entity';
import { ConsomationService } from './consomation.service';
export declare class ConsomationController {
    private readonly consomationService;
    constructor(consomationService: ConsomationService);
    findAll(): Promise<Consomation[]>;
    getByid(id: number): Promise<Consomation>;
    create(createReservationDto: CreateConsomationDto): Promise<Consomation>;
    update(id: number, updateReservationDto: CreateConsomationDto): Promise<Consomation>;
    delete(id: number): Promise<Consomation>;
}
