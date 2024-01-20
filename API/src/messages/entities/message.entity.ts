import { User } from "src/users/entities/user.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    message: string;
    @Column()
    datetime: string;
    @Column()
    status:string; // status du message 

    @ManyToOne(()=> User,(expediteur)=>expediteur.messages)
    expediteur:User;

    @ManyToOne(()=> User,(destinataire)=>destinataire.messagess)
    destinataire:User;
}
