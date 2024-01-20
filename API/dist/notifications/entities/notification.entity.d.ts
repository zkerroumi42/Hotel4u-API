import { User } from "src/users/entities/user.entity";
export declare class Notification {
    id: number;
    message: string;
    status: string;
    user: User;
}
