import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    read(id: number): Promise<Message>;
    readByExpediteurId(expediteurId: number): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    update(id: number, data: Partial<CreateMessageDto>): Promise<Message>;
    delete(id: number): Promise<Message>;
}
