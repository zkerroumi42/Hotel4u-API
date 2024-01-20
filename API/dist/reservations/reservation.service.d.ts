import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationService {
    private readonly reservationRepository;
    constructor(reservationRepository: Repository<Reservation>);
    findAll(): Promise<Reservation[]>;
    read(id: number): Promise<Reservation>;
    count(): Promise<number>;
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    update(id: number, data: Partial<CreateReservationDto>): Promise<Reservation>;
    delete(id: number): Promise<Reservation>;
}
