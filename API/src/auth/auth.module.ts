import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { EmailService } from 'src/email/email.service';
import { NotificationService } from 'src/notifications/notification.service';
import { Notification } from 'src/notifications/entities/notification.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([User,Notification])],
  controllers: [AuthController],
  providers: [AuthService,UsersService,EmailService,NotificationService],
})
export class AuthModule {}
