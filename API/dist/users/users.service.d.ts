import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create.user.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<User>;
    signIn(userName: string, pass: string): Promise<any>;
    findAll(): Promise<User[]>;
    create(user: Partial<User>): Promise<User>;
}
