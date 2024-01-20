import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll() : Promise<Message[]> {
    return await this.messageRepository.find({relations: ['expediteur', 'destinataire'], });
  }

  async read(id: number): Promise<Message> {
    return await this.messageRepository.findOne({
      where: { id },
      relations: ['expediteur', 'destinataire'], 
    });
  }

  async readByExpediteurId(expediteurId: number): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { expediteur: { id: expediteurId } },
      relations: ['expediteur', 'destinataire'],
    });
  }

  async create(createMessageDto: CreateMessageDto) {
    const messageentity = new Message();
    messageentity.message = createMessageDto.message;
    messageentity.datetime = createMessageDto.datetime;
    messageentity.status = createMessageDto.status;

    if (createMessageDto.expediteurId) {
        const expediteur = new User(); 
        expediteur.id = createMessageDto.expediteurId;
        messageentity.expediteur = expediteur;
    }

    if (createMessageDto.destinataireId) {
        const destinataire = new User();
        destinataire.id = createMessageDto.destinataireId;
        messageentity.destinataire = destinataire;
    }

    const message = this.messageRepository.create(messageentity);
    await this.messageRepository.save(message);
    return message;
}


  async update(id :number ,data:Partial<CreateMessageDto>) {
    const updateData: Partial<Message> = {};
  
    if (data.expediteurId) {
        const expediteur = new User();
        expediteur.id = data.expediteurId;
        updateData.expediteur = expediteur;
        delete data.expediteurId;
    }
  
    if (data.destinataireId) {
        const destinataire = new User();
        destinataire.id = data.destinataireId;
        updateData.destinataire = destinataire;
        delete data.destinataireId;
    }
  
    await this.messageRepository.update({ id }, { ...data, ...updateData });
  
    const reservation = await this.messageRepository.findOne({ where: { id } });
    return reservation;
  
  }

  async delete(id:number){
    const Message= await this.messageRepository.findOne({where: {id},relations: ['destinataire','expediteur']});
    await this.messageRepository.delete(Message);
    return Message;
  }

}
