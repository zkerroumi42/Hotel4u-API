import { IAuthenticate, Role } from './interface/Role';
import { AuthenticateDto } from './dto/authenticate.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    users: {
        id: string;
        userName: string;
        password: string;
        role: Role;
    }[];
    authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate>;
}
