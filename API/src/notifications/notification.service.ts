import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}


  async findAll() : Promise<Notification[]> {
    
    return await this.notificationRepository.find();
  }

  async read(id:number): Promise<Notification>{
  return await this.notificationRepository.findOne({where: {id,}});
  }

  async create(createNotificationlDto: CreateNotificationDto) {
        const Notificationentity=new Notification();
        Notificationentity.message=createNotificationlDto.message;
        Notificationentity.status=createNotificationlDto.status;
        const notification=this.notificationRepository.create(Notificationentity);
        await this.notificationRepository.save(Notificationentity);
        return notification;
  }

  async createnotification(message:string, status:string,id :number){
    const Notificationentity=new Notification();
    Notificationentity.message=message;
    Notificationentity.status=status;

    const user = new User(); 
    user.id = id;
    Notificationentity.user = user;

    const notification= await this.notificationRepository.create(Notificationentity);
    await this.notificationRepository.save(Notificationentity);
    return notification;
}


async createn(createNotificationDto: CreateNotificationDto) {
    const Notificationentity=new Notification();
    Notificationentity.message=createNotificationDto.message;
    Notificationentity.status=createNotificationDto.status;

  if (createNotificationDto.userId) {
      const user = new User(); 
      user.id = createNotificationDto.userId;
      Notificationentity.user = user;
  }

  

  const notification= await this.notificationRepository.create(Notificationentity);
  await this.notificationRepository.save(Notificationentity);
  return notification;
}



  async update(id :number ,data:Partial<CreateNotificationDto>){
  await this.notificationRepository.update({id},data);
  const notification= await this.notificationRepository.findOne({where: {id}});
  return notification;
  }

  async delete(id:number){
    const notification= await this.notificationRepository.findOne({where: {id}});
    await this.notificationRepository.delete(notification);
    return notification;
  }

}
