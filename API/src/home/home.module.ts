import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChambreService } from 'src/chambres/chambre.service';
import { Chambre } from 'src/chambres/entities/chambre.entity';
import { CommentService } from 'src/comments/comment.service';
import { Hotel } from 'src/hotels/entities/hotel.entity';
import { HotelService } from 'src/hotels/hotel.service';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { ReservationService } from 'src/reservations/reservation.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Ville } from 'src/villes/entities/ville.entity';
import { Comment } from 'src/comments/entities/comment.entity';

import { VilleService } from 'src/villes/ville.service';
import { HomeController } from './home.controller';
import { MessageService } from 'src/messages/message.service';
import { Message } from 'src/messages/entities/message.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { PaymentService } from 'src/payment/payment.service';
import { EmailService } from 'src/email/email.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ville,User,Reservation,Chambre,Hotel,Comment,Message,Payment])],
  controllers: [HomeController],
  providers: [VilleService,UsersService,HotelService,ChambreService,ReservationService,CommentService,MessageService,PaymentService,EmailService,AuthService,],
})
export class HomeModule {}
