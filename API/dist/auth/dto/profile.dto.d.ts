import { Role } from "../interface/Role";
export declare class ProfileDto {
    readonly id: string;
    readonly userUUID: string;
    readonly userName: string;
    readonly email: string;
    readonly password: string;
    readonly role: Role;
}
