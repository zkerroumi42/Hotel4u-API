import { Controller, Get,Post, Param, ParseIntPipe, Body, HttpStatus, HttpCode, Delete, Patch} from '@nestjs/common';
import { ReservationService } from 'src/reservations/reservation.service';
import { HotelService } from 'src/hotels/hotel.service';
import { CommentService } from 'src/comments/comment.service';
import { UsersService } from 'src/users/users.service';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';
import { Message } from 'src/messages/entities/message.entity';
import { MessageService } from 'src/messages/message.service';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { IAuthenticate } from 'src/auth/interface/Role';
import { AuthenticateDto } from 'src/auth/dto/authenticate.dto';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { CreateReservationDto } from 'src/reservations/dto/create-reservation.dto';
import { PaymentService } from 'src/payment/payment.service';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';
import { Payment } from 'src/payment/entities/payment.entity';
import { AuthService } from 'src/auth/auth.service';



@Controller('api/home')
export class HomeController {
  constructor(
    private readonly messageService: MessageService,
    private readonly hotelService: HotelService,
    private readonly reservationService: ReservationService,
    private readonly commentService: CommentService,
    private readonly usersService: UsersService,
    private readonly paymentService: PaymentService,
    private readonly authService: AuthService,
    )
     

    {}

    @Get('search/:ville')
    async getByville(@Param('ville') ville: string) {
    try {
      return await this.hotelService.searchForHotelsInCity(ville);
    } catch (error) {
      throw error;
    }
    }

    @Get('search/:ville/:type')
    async getByVilleAndType(@Param('ville') ville: string, @Param('type') type: string) {
      try {
        return await this.hotelService.searchByVilleAndType(ville, type);
      } catch (error) {
        throw error;
      }
    }

    @Get('search/budget/:minBudget/:maxBudget')
    async getByBudget(
      @Param('minBudget', ParseIntPipe) minBudget: number,
      @Param('maxBudget', ParseIntPipe) maxBudget: number,
    ) {
      try {

        return await this.hotelService.searchByBudget(minBudget, maxBudget);
        
      } catch (error) {
        throw error;
      }
  
    }

    @Post('messages/envoyer')
    create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
    }

    @Get('recevoir/:id')
    async getByid(@Param('id') id: number) {
    return await this.messageService.read(id);
    }

    @Get('resevoir/user/:id')
  async readBySourceId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    try {

      return await this.messageService.readByExpediteurId(id);

    } catch (error) {
      throw error;
    }
  }
// authentification
  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() createUserDto: CreateUserDto):Promise<User>{
    return await this.usersService.register(createUserDto);
  }

   @Post('login')
  @HttpCode(HttpStatus.OK)
   async login(@Body() authenticateDto: AuthenticateDto):Promise<IAuthenticate> {
       return  await this.authService.authenticate(authenticateDto);
   }


   // comments
   @Get('Comments/list')
     async findAll() : Promise<Comment[]> {
       return await this.commentService.findAll();
     }
 
   @Get('comments/read/:id')
   async getByidd(@Param('id') id: number) {
   return await this.commentService.read(id);
   }

   @Post('comments/create')
      async commenter(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
      return await this.commentService.create(createCommentDto);
   }

   @Patch('comments/update/:id')
   update(@Param('id') id: number, @Body() updateCommentDto: CreateCommentDto): Promise<Comment> {
     return this.commentService.update(id, updateCommentDto);
   }
   
   @Delete('comments/delete/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id') id: number): Promise<Comment> {
     return this.commentService.delete(id);
   }

   //reserver
   @Post('reservation/create')
   reserver(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
   return this.reservationService.create(createReservationDto);
   }

   @Delete('reservation/annuler/:id')
   annuler(@Param('id') id: number): Promise<Reservation> {
     return this.reservationService.delete(id);
   }
  //  payer
  @Post('reservation/payer')
  payer(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
  return this.paymentService.create(createPaymentDto);
  }
}
