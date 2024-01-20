import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { NotificationService } from "src/notifications/notification.service";
import { ChangePasswordDto } from "./dto/change-password.dto";
export declare class UsersController {
    private readonly usersService;
    private readonly notificationService;
    constructor(usersService: UsersService, notificationService: NotificationService);
    findAll(): Promise<User[]>;
    getByid(id: number): Promise<User>;
    update(id: number, updateUserDto: CreateUserDto): Promise<User>;
    delete(id: number): Promise<User>;
    forgetPassword(changePasswordDto: ChangePasswordDto): Promise<void>;
}
