import { Chambre } from "src/chambres/entities/chambre.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { Facture } from "src/factures/entities/facture.entity";
import { User } from "src/users/entities/user.entity";
export declare class Reservation {
    id: number;
    num_conf: number;
    date_arr: string;
    date_dep: string;
    date_payer: string;
    montant: number;
    Nb_person: number;
    client: User;
    chambre: Chambre;
    comments: Comment[];
    factures: Facture[];
}
