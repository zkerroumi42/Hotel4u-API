import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    findAll(): Promise<Notification[]>;
    getByid(id: number): Promise<Notification>;
    create(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    update(id: number, updateNotificationDto: CreateNotificationDto): Promise<Notification>;
    delete(id: number): Promise<Notification>;
}
