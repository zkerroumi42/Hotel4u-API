import { Role } from "src/auth/interface/Role";
export declare class CreateUserDto {
    readonly id: number;
    readonly nom: string;
    readonly prenom: string;
    readonly email: string;
    readonly password: string;
    readonly role: Role;
    readonly phoneNumber: string;
}
