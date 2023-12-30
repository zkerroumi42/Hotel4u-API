import { HttpException, HttpStatus, Injectable,Post } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}


  async findAll() : Promise<Hotel[]> {
    return await this.hotelRepository.find();
  }

  async read(id:number): Promise<Hotel>{
  return await this.hotelRepository.findOne({where: {id,}});
  }

  async create(createHotelDto: CreateHotelDto) {
        const hotelentity=new Hotel();
        hotelentity.name=createHotelDto.name;
        hotelentity.email=createHotelDto.email;
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


  // async update(id: string,updateStudentDto: UpdateStudentDto) {
  //   const courses = updateStudentDto.courses && 
  //   (await Promise.all(
  //     updateStudentDto.courses.map(x => this.preloadCourseByName(x))
  //   ))
  //     const updateStudent = await this.hotelRepository.preload({
  //       id: +id,
  //       ...updateStudentDto,
  //       courses
  //     })
  //    if (!updateStudent) {
  //     throw new NotFoundException(`This Hotel : ${id} not found`);
  //    }
  //    return this.hotelRepository.save(updateStudent);
  //   }

  async delete(id:number){
    const hotel= await this.hotelRepository.findOne({where: {id}});
    await this.hotelRepository.delete(hotel);
    return hotel;
  }

}
