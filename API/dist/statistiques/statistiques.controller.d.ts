import { VilleService } from 'src/villes/ville.service';
import { ReservationService } from 'src/reservations/reservation.service';
import { HotelService } from 'src/hotels/hotel.service';
import { CommentService } from 'src/comments/comment.service';
import { UsersService } from 'src/users/users.service';
import { ChambreService } from 'src/chambres/chambre.service';
export declare class StatistiquesController {
    private readonly villeService;
    private readonly hotelService;
    private readonly reservationService;
    private readonly commentService;
    private readonly usersService;
    private readonly chambreService;
    constructor(villeService: VilleService, hotelService: HotelService, reservationService: ReservationService, commentService: CommentService, usersService: UsersService, chambreService: ChambreService);
    statistiques(): Promise<{
        nb_villes: number;
        nb_clients: number;
        nb_visiteurs: number;
        nb_hotels: number;
        comments: import("../comments/entities/comment.entity").Comment[];
    }>;
    statistiquess(): Promise<{
        nb_users: number;
        nb_clients: number;
        nb_chambres: number;
        nb_reservations: number;
        comments: import("../comments/entities/comment.entity").Comment[];
    }>;
}
