import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Facture} from './entities/facture.entity';
import { CreateFactureDto } from './dto/create-facture.dto';


@Injectable()
export class FactureService {
  constructor(
    @InjectRepository(Facture)
    private readonly factureRepository: Repository<Facture>,
  ) {}


  async findAll() : Promise<Facture[]> {
    return await this.factureRepository.find();
  }

  async read(id:number): Promise<Facture>{
  return await this.factureRepository.findOne({where: {id,}});
  }

  async create(createvillelDto: CreateFactureDto) {
        const factureentity=new Facture();
        factureentity.name=createvillelDto.name;
        const facture=this.factureRepository.create(factureentity);
        await this.factureRepository.save(factureentity);
        return facture;
  }

  async update(id :number ,data:Partial<CreateFactureDto>){
  await this.factureRepository.update({id},data);
  const facture= await this.factureRepository.findOne({where: {id}});
  return facture;
  }

  async delete(id:number){
    const facture= await this.factureRepository.findOne({where: {id}});
    await this.factureRepository.delete(facture);
    return facture;
  }

}
