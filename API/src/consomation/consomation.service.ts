import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consomation} from './entities/Consomation.entity';
import { CreateConsomationDto } from './dto/create-consomation.dto';


@Injectable()
export class ConsomationService {
  constructor(
    @InjectRepository(Consomation)
    private readonly consomationRepository: Repository<Consomation>,
  ) {}


  async findAll() : Promise<Consomation[]> {
    return await this.consomationRepository.find();
  }

  async read(id:number): Promise<Consomation>{
  return await this.consomationRepository.findOne({where: {id,}});
  }

  async create(createvillelDto: CreateConsomationDto) {
        const villeentity=new Consomation();
        villeentity.name=createvillelDto.name;
        const hotel=this.consomationRepository.create(villeentity);
        await this.consomationRepository.save(villeentity);
        return hotel;
  }

  async update(id :number ,data:Partial<CreateConsomationDto>){
  await this.consomationRepository.update({id},data);
  const hotel= await this.consomationRepository.findOne({where: {id}});
  return hotel;
  }

  async delete(id:number){
    const hotel= await this.consomationRepository.findOne({where: {id}});
    await this.consomationRepository.delete(hotel);
    return hotel;
  }

}
