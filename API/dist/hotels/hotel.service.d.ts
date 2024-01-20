import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
import { Ville } from 'src/villes/entities/ville.entity';
export declare class HotelService {
    private readonly hotelRepository;
    private readonly villeRepository;
    constructor(hotelRepository: Repository<Hotel>, villeRepository: Repository<Ville>);
    findAll(): Promise<Hotel[]>;
    read(id: number): Promise<Hotel>;
    searchparville(nameville: string): Promise<Hotel[]>;
    searchForHotelsInCity(villename: string): Promise<Hotel[]>;
    searchByVilleAndType(name: string, hotelType: string): Promise<Hotel[]>;
    searchByBudget(minBudget: number, maxBudget: number): Promise<Hotel[]>;
    count(): Promise<number>;
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    update(id: number, data: Partial<CreateHotelDto>): Promise<Hotel>;
    delete(id: number): Promise<Hotel>;
}
