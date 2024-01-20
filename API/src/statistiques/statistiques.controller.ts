import { Controller, Get} from '@nestjs/common';
import { VilleService } from 'src/villes/ville.service';
import { ReservationService } from 'src/reservations/reservation.service';
import { HotelService } from 'src/hotels/hotel.service';
import { CommentService } from 'src/comments/comment.service';
import { UsersService } from 'src/users/users.service';
import { ChambreService } from 'src/chambres/chambre.service';



@Controller('api/dashbord')
export class StatistiquesController {
  constructor(
    private readonly villeService: VilleService,
    private readonly hotelService: HotelService,
    private readonly reservationService: ReservationService,
    private readonly commentService: CommentService,
    private readonly usersService: UsersService,
    private readonly chambreService: ChambreService) 

    {}

    @Get('Admin/Statistiques')
    async statistiques() {
      try {
        const nb_visiteurs = await this.usersService.count(); 
        const nb_villes = await this.villeService.count(); 
        const nb_clients = await this.usersService.count(); 
        const nb_hotels = await this.hotelService.count();
        const comments = await this.commentService.findAll(); 

        return { nb_villes, nb_clients,nb_visiteurs,nb_hotels,comments};
      } catch (error) {
        throw error;
      }
    }
  
    @Get('Geran/Statistiques')
    async statistiquess() {
      try {
        const nb_users = await this.usersService.count(); 
        const nb_clients = await this.usersService.count();
        const nb_chambres = await this.chambreService.count();
        const nb_reservations = await this.reservationService.count();
        const comments = await this.commentService.findAll(); 

        return {  nb_users,nb_clients,nb_chambres,nb_reservations,comments };
      } catch (error) {
        throw error;
      }
    }

}
