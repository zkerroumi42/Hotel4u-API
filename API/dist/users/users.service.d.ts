import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create.user.dto";
import { EmailService } from "src/email/email.service";
export declare class UsersService {
    private userRepository;
    private readonly emailService;
    constructor(userRepository: Repository<User>, emailService: EmailService);
    register(createUserDto: CreateUserDto): Promise<User>;
    signIn(email: string, pass: string): Promise<any>;
    findAll(): Promise<User[]>;
    read(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    count(): Promise<number>;
    create(user: Partial<User>): Promise<User>;
    update(id: number, data: Partial<CreateUserDto>): Promise<User>;
    delete(id: number): Promise<User>;
    changePassword(email: string, password: string): Promise<void>;
    forgotPassword(email: string): Promise<void>;
    private generateUniqueResetToken;
    private getExpirationDate;
}
