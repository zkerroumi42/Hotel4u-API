import { Payment } from "src/payment/entities/payment.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
export declare class Facture {
    id: number;
    name: string;
    payment: Payment;
    reservation: Reservation;
}
