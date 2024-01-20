import { Payment } from "src/payment/entities/payment.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";

import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class Facture {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToOne(() => Payment) 
    @JoinColumn()
    payment: Payment;

    // relationships
    @ManyToOne(() => Reservation, (reservation) => reservation.factures)
    reservation: Reservation;
    
}
