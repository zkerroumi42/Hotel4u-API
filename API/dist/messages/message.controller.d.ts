import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<Message[]>;
    getByid(id: number): Promise<Message>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    update(id: number, updateMessageDto: CreateMessageDto): Promise<Message>;
    delete(id: number): Promise<Message>;
}
