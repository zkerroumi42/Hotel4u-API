import { Role } from "src/auth/interface/Role";
import { Comment } from "src/comments/entities/comment.entity";
import { Consomation } from "src/consomations/entities/Consomation.entity";
import { Facture } from "src/factures/entities/facture.entity";
import { Hotel } from "src/hotels/entities/hotel.entity";
import { Message } from "src/messages/entities/message.entity";
import { Notification } from "src/notifications/entities/notification.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    prenom: string;
    @Column()
    email: string;
    @Column({default: '0000' })
    password: string;
    @Column({nullable:true,default: 'User'})
    role: Role;
    @Column({nullable:true})
    phoneNumber: string;
    @Column({nullable:true})
    resetToken: string;
    @Column({nullable:true})
    resetTokenExpires: Date;


    //relations between databases


    @OneToMany(()=> Reservation,(reservation)=>reservation.client)
    reservations:Reservation[];

    @OneToMany(()=> Consomation,(consomation)=>consomation.client)
    consomations:Consomation[];
    
    //** */
    @OneToMany(()=> Hotel,(hotel)=>hotel.user)
    hotels:Hotel[];

    //relations between databases
    @OneToMany(()=> Notification,(notification)=>notification.user)
    Notifications:Notification[];

    @OneToMany(()=> Message,(message)=>message.expediteur)
    messages:Message[];

    @OneToMany(()=> Message,(message)=>message.destinataire)
    messagess:Message[];

    

}
