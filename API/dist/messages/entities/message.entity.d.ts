import { User } from "src/users/entities/user.entity";
export declare class Message {
    id: number;
    message: string;
    datetime: string;
    status: string;
    expediteur: User;
    destinataire: User;
}
