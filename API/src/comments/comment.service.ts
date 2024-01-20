import { Injectable,} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}


  async findAll() : Promise<Comment[]> {
    return await this.commentRepository.find({relations: ['reservation',], });
  }


  async read(id: number): Promise<Comment> {
    return await this.commentRepository.findOne({
      where: { id },
      relations: ['reservation', ], 
    });
  }

  async create(createCommentlDto: CreateCommentDto) {
    const Commententity=new Comment();
    Commententity.comment = createCommentlDto.comment;
    if (createCommentlDto.reservationId) {
        const reservation = new Reservation(); 
        reservation.id = createCommentlDto.reservationId;
        Commententity.reservation= reservation;
    }
    const comment=this.commentRepository.create(Commententity);
    await this.commentRepository.save(Commententity);
    return comment;
}


  async update(id: number, data: Partial<CreateCommentDto>) {
    const updateData: Partial<Comment> = {};
  
    if (data.reservationId) {
        const reservation = new Reservation();
        reservation.id = data.reservationId;
        updateData.reservation = reservation;
        delete data.reservationId;
    }
  
    await this.commentRepository.update({ id }, { ...data, ...updateData });
  
    const reservation = await this.commentRepository.findOne({ where: { id } });
    return reservation;
  
  }
  async delete(id:number){
    const comment= await this.commentRepository.findOne({where: {id}});
    await this.commentRepository.delete(comment);
    return comment;
  }

}
