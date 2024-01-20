import { Chambre } from "src/chambres/entities/chambre.entity";
import { User } from "src/users/entities/user.entity";
import { Ville } from "src/villes/entities/ville.entity";
export declare class Hotel {
    id: number;
    name: string;
    email: string;
    telephone: string;
    type: string;
    Budget: number;
    logo: string;
    facebook: string;
    instagrame: string;
    youtube: string;
    longitude: number;
    latitude: number;
    ville: Ville;
    user: User;
    chambres: Chambre[];
}
