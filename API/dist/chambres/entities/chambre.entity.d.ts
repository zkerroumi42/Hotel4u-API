import { Hotel } from "src/hotels/entities/hotel.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
export declare class Chambre {
    id: number;
    type: string;
    Nb_max: number;
    reservationss: Reservation[];
    hotel: Hotel;
}
