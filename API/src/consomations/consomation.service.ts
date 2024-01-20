import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consomation} from './entities/Consomation.entity';
import { CreateConsomationDto } from './dto/create-consomation.dto';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class ConsomationService {
  constructor(
    @InjectRepository(Consomation)
    private readonly consomationRepository: Repository<Consomation>,
  ) {}


  async findAll() : Promise<Consomation[]> {
    return await this.consomationRepository.find({relations: ['client']});
  }

  async read(id:number): Promise<Consomation>{
  return await this.consomationRepository.findOne({where: {id,},relations: ['client']});
  }

  async create(createConsomationDto: CreateConsomationDto) {
    const consomationentity=new Consomation();
        consomationentity.name=createConsomationDto.name;
        consomationentity.prix=createConsomationDto.prix;

if (createConsomationDto.clientId) {
    const client = new User(); 
    client.id = createConsomationDto.clientId;
    consomationentity.client = client;
}

const consomation=this.consomationRepository.create(consomationentity);
await this.consomationRepository.save(consomationentity);
return consomation;
}

  async update(id :number ,data:Partial<CreateConsomationDto>) {
    const updateData: Partial<Consomation> = {};
  
    if (data.clientId) {
        const client = new User();
        client.id = data.clientId;
        updateData.client = client;
        delete data.clientId;
    }
  
    await this.consomationRepository.update({ id }, { ...data, ...updateData });
  
    const consomation = await this.consomationRepository.findOne({ where: { id } });
    return consomation;
  
  }

  async delete(id:number){
    const consomation= await this.consomationRepository.findOne({where: {id},relations: ['client']});
    await this.consomationRepository.delete(consomation);
    return consomation;
  }

}
