import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    findAll(): Promise<Comment[]>;
    read(id: number): Promise<Comment>;
    create(createCommentlDto: CreateCommentDto): Promise<Comment>;
    update(id: number, data: Partial<CreateCommentDto>): Promise<Comment>;
    delete(id: number): Promise<Comment>;
}
