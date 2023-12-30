import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
export declare class HotelService {
    private readonly hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    findAll(): Promise<Hotel[]>;
    read(id: number): Promise<Hotel>;
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    update(id: number, data: Partial<CreateHotelDto>): Promise<Hotel>;
    delete(id: number): Promise<Hotel>;
}
