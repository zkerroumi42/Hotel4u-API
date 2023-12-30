import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate } from './interface/Role';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authenticateDto: AuthenticateDto): Promise<IAuthenticate>;
    profile(req: any, res: any): any;
}
