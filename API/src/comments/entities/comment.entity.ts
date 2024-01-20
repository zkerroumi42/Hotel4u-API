import { Reservation } from "src/reservations/entities/reservation.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    comment: string;

    @ManyToOne(()=> Reservation,(reservation)=>reservation.comments)
    reservation:Reservation;
    
}
