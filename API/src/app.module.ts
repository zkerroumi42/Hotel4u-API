import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { UsersModule } from './users/users.module';
import { HotelModule } from './hotels/hotel.module';
import { VilleModule } from './villes/ville.module';
import { ChambreModule } from './chambres/chambre.module';
import { ReservationModule } from './reservations/reservation.module';
import { ConsomationModule } from './consomations/consomation.module';
import { FactureModule } from './factures/facture.module';
import { MessageModule } from './messages/message.module';
import { NotificationModule } from './notifications/notification.module';
import { PaymentModule } from './payment/payment.module';
import { CommentModule } from './comments/comment.module';
import { StatistiqueModule } from './statistiques/statistique.module';
import { HomeModule } from './home/home.module';


@Module({
  imports: [ 
    HotelModule,VilleModule,ConsomationModule,ReservationModule,FactureModule,ChambreModule,MessageModule,NotificationModule,PaymentModule,CommentModule,StatistiqueModule,HomeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'DBhotel', 
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    PassportModule,
    JwtModule.register({ secret: 'secrete', signOptions: { expiresIn: '60s' } }),
    UsersModule,
  ], 
  controllers: [],
  providers: [JwtStrategy,],
})
export class AppModule {}
