import { Role } from "src/auth/interface/Role";
export declare class CreateUserDto {
    readonly id: number;
    readonly nom: string;
    readonly prenom: string;
    readonly userName: string;
    readonly password: string;
    readonly email: string;
    readonly role: Role;
    readonly userUUID: string;
}
