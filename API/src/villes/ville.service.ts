import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './entities/ville.entity';
import { CreateVilleDto } from './dto/create-ville.dto';

@Injectable()
export class VilleService {

  constructor(
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>,
  ) {}

  async findAll() : Promise<Ville[]> {
    return await this.villeRepository.find();
  }

  async read(id:number): Promise<Ville>{
  return await this.villeRepository.findOne({where: {id,}});
  }

  async count(){
    return await this.villeRepository.count();
  }

  async create(createvillelDto: CreateVilleDto) {
        const villeentity=new Ville();
        villeentity.name=createvillelDto.name;
        const ville=this.villeRepository.create(villeentity);
        await this.villeRepository.save(villeentity);
        return ville;
  }

  async update(id :number ,data:Partial<CreateVilleDto>){
  await this.villeRepository.update({id},data);
  const ville= await this.villeRepository.findOne({where: {id}});
  return ville;
  }

  async delete(id:number){
    const ville= await this.villeRepository.findOne({where: {id}});
    await this.villeRepository.delete(ville);
    return ville;
  }

}
