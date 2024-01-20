import { Chambre } from "src/chambres/entities/chambre.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { Facture } from "src/factures/entities/facture.entity";
import { User } from "src/users/entities/user.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, OneToMany } from "typeorm";
@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    num_conf: number;
    @Column()
    date_arr: string;
    @Column()
    date_dep: string;
    @Column()
    date_payer: string;
    @Column()
    montant: number;
    @Column()
    Nb_person: number;

      // relationships
      @ManyToOne(()=> User,(client)=>client.reservations)
      client:User;

      @ManyToOne(()=> Chambre,(chambre)=>chambre.reservationss)
      chambre:Chambre;

      @OneToMany(()=>Comment,(comment)=>comment.reservation)
      comments:Comment[];

      @OneToMany(()=> Facture,(facture)=>facture.reservation)
      factures:Facture[];
      
            
}
