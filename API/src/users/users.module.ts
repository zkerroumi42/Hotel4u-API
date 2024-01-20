import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { NotificationService } from 'src/notifications/notification.service';
import { EmailService } from 'src/email/email.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([User,Notification])],
  controllers: [UsersController],
  providers: [UsersService,NotificationService,EmailService,AuthService]
})
export class UsersModule {}
