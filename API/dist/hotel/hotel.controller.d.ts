import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    findAll(): Promise<Hotel[]>;
    getByid(id: number): Promise<Hotel>;
    create(CreateHotelDto: CreateHotelDto): Promise<Hotel>;
    update(id: number, updateHotelDto: CreateHotelDto): Promise<Hotel>;
    delete(id: number): Promise<Hotel>;
}
