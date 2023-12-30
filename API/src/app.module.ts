import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { UsersModule } from './users/users.module';
import { HotelModule } from './hotel/hotel.module';
import { VilleModule } from './ville/ville.module';
import { ChambreModule } from './chambre/chambre.module';
import { ReservationModule } from './reservation/reservation.module';
import { ConsomationModule } from './consomation/consomation.module';
import { FactureModule } from './facture/facture.module';


@Module({
  imports: [ 
    HotelModule,VilleModule,ConsomationModule,ReservationModule,FactureModule,ChambreModule,
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
