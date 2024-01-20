import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Chambre } from './entities/chambre.entity';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { Hotel } from 'src/hotels/entities/hotel.entity';

@Injectable()
export class ChambreService {

  constructor(
    @InjectRepository(Chambre)
    private readonly ChambreRepository: Repository<Chambre>,
  ) {}


  async findAll() : Promise<Chambre[]> {
    return await this.ChambreRepository.find();
  }

  async read(id:number): Promise<Chambre>{
  return await this.ChambreRepository.findOne({where: {id,}});
  }

  async count(){
    return await this.ChambreRepository.count();
  }
  
  async create(createChambrelDto: CreateChambreDto) {
        const Chambreentity=new Chambre();
        Chambreentity.type=createChambrelDto.type;
        Chambreentity.Nb_max=createChambrelDto.Nb_max;

        if (createChambrelDto.hotelId) {
          const hotel = new Hotel(); 
          hotel.id = createChambrelDto.hotelId;
          Chambreentity.hotel = hotel;
      }
        const chambre=this.ChambreRepository.create(Chambreentity);
        await this.ChambreRepository.save(Chambreentity);
        return chambre;
  }

  async update(id :number ,data:Partial<CreateChambreDto>){
  await this.ChambreRepository.update({id},data);
  const Chambre= await this.ChambreRepository.findOne({where: {id}});
  return Chambre;
  }

  async delete(id:number){
    const Chambre= await this.ChambreRepository.findOne({where: {id}});
    await this.ChambreRepository.delete(Chambre);
    return Chambre;
  }

}
