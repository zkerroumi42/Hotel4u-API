import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create.user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    signIn(signInDto: Record<string, any>): Promise<any>;
    register(createUserDto: CreateUserDto): Promise<User>;
    create(user: any): Promise<User>;
    profile(req: any, res: any): any;
}
