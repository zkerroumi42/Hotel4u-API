import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate } from './interface/Role';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { UsersService } from 'src/users/users.service';
import { NotificationService } from 'src/notifications/notification.service';
import { User } from 'src/users/entities/user.entity';
import { ForgotPasswordDto } from 'src/users/dto/forgot-password.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    private readonly notificationService;
    constructor(authService: AuthService, usersService: UsersService, notificationService: NotificationService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(authenticateDto: AuthenticateDto, res: any): Promise<IAuthenticate>;
    forgetPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    logout(res: any): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
}
