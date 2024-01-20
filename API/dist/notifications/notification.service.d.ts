import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationService {
    private readonly notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    findAll(): Promise<Notification[]>;
    read(id: number): Promise<Notification>;
    create(createNotificationlDto: CreateNotificationDto): Promise<Notification>;
    createnotification(message: string, status: string, id: number): Promise<Notification>;
    createn(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    update(id: number, data: Partial<CreateNotificationDto>): Promise<Notification>;
    delete(id: number): Promise<Notification>;
}
