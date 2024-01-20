import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from 'src/villes/entities/ville.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>, 
  ) {}


  async findAll() : Promise<Hotel[]> {
    return await this.hotelRepository.find({relations:["ville","user"]});
  }

  async read(id:number): Promise<Hotel>{
  return await this.hotelRepository.findOne({where: {id,}});
  }
//search par ville
  async searchparville(nameville: string): Promise<Hotel[]> {
    const ville = await this.villeRepository.findOne({ where: { name:nameville } });
  
    if (!ville) {
      return [];
    }
  
    return await this.hotelRepository.find({ relations: ["ville"], where: { ville: { id: ville.id }} });
  }
  // *****
  async searchForHotelsInCity(villename: string): Promise<Hotel[]> {
    try {
      const ville = await this.villeRepository.findOne({ where: { name: villename } });
  
      if (!ville) {
        return [];
      }
      const hotels = await this.hotelRepository.find({ relations: ["ville"], where: { ville: { id: ville.id }} });
      return hotels;
    } catch (error) {
      console.error('Error in search:', error);
      throw new Error('An error occurred while searching for hotels in the ville.');
    }
  }
//search par ville and type
async searchByVilleAndType(name: string, hotelType: string): Promise<Hotel[]> {
  const ville = await this.villeRepository.findOne({ where: { name } });

  if (!ville) {
    return [];
  }

  return await this.hotelRepository.find({where: { id: ville.id, type: hotelType },});

}

//search par budgets

async searchByBudget(minBudget: number, maxBudget: number): Promise<Hotel[]> {
  return this.hotelRepository.find({
    where: {
      Budget: Between(minBudget, maxBudget),
    },
  });
}

  async count(){
    return await this.hotelRepository.count();
  }



  async create(createHotelDto: CreateHotelDto){
        const hotelentity=new Hotel();
        hotelentity.name=createHotelDto.name;
        hotelentity.email=createHotelDto.email;
        hotelentity.type=createHotelDto.type;
        hotelentity.Budget=createHotelDto.Budget;
        hotelentity.telephone=createHotelDto.telephone;
        hotelentity.logo=createHotelDto.logo;
        hotelentity.facebook=createHotelDto.facebook;
        hotelentity.instagrame=createHotelDto.instagrame;
        hotelentity.youtube=createHotelDto.youtube;
        hotelentity.longitude=createHotelDto.longitude;
        hotelentity.latitude=createHotelDto.latitude;
        const hotel=this.hotelRepository.create(hotelentity);
        await this.hotelRepository.save(hotelentity);
        return hotel;
  }

  async update(id :number ,data:Partial<CreateHotelDto>){
  await this.hotelRepository.update({id},data);
  const hotel= await this.hotelRepository.findOne({where: {id}});
  return hotel;
  }

  


  async delete(id:number){
    const hotel= await this.hotelRepository.findOne({where: {id}});
    await this.hotelRepository.delete(hotel);
    return hotel;
  }

}
