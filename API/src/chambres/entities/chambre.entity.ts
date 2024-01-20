import { Hotel } from "src/hotels/entities/hotel.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne } from "typeorm";
@Entity()
export class Chambre {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    Nb_max: number;

    // relationships

    @OneToMany(()=> Reservation,(reservation)=>reservation.chambre)
    reservationss:Reservation[];

    @ManyToOne(()=> Hotel,(hotel)=>hotel.chambres)
    hotel:Hotel;

}
