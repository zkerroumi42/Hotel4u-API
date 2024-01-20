import { Role } from "src/auth/interface/Role";
import { Consomation } from "src/consomations/entities/Consomation.entity";
import { Hotel } from "src/hotels/entities/hotel.entity";
import { Message } from "src/messages/entities/message.entity";
import { Notification } from "src/notifications/entities/notification.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
export declare class User {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role: Role;
    phoneNumber: string;
    resetToken: string;
    resetTokenExpires: Date;
    reservations: Reservation[];
    consomations: Consomation[];
    hotels: Hotel[];
    Notifications: Notification[];
    messages: Message[];
    messagess: Message[];
}
