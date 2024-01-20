import { User } from "src/users/entities/user.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
@Entity()
export class Consomation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    prix: number;

    // relationships
    @ManyToOne(()=> User,(client)=>client.consomations)
    client:User;
  
}
