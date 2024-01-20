import { ReservationService } from './reservation.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    findAll(): Promise<Reservation[]>;
    getByid(id: number): Promise<Reservation>;
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    update(id: number, updateReservationDto: CreateReservationDto): Promise<Reservation>;
    delete(id: number): Promise<Reservation>;
}
