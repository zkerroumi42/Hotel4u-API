import { Role } from "src/auth/interface/Role";
export declare class User {
    id: number;
    nom: string;
    prenom: string;
    userName: string;
    password: string;
    email: string;
    role: Role;
    userUUID: string;
}
