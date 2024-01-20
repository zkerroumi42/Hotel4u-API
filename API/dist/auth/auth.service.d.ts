import { IAuthenticate } from './interface/Role';
import { AuthenticateDto } from './dto/authenticate.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate>;
}
