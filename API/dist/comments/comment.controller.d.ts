import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    findAll(): Promise<Comment[]>;
    getByid(id: number): Promise<Comment>;
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    update(id: number, updateCommentDto: CreateCommentDto): Promise<Comment>;
    delete(id: number): Promise<Comment>;
}
