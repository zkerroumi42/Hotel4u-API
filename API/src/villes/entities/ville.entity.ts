import { Hotel } from "src/hotels/entities/hotel.entity";
import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
@Entity()
export class Ville {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    
    //relations between databases
    @OneToMany(()=> Hotel,(hotel)=>hotel.ville)
    hotels:Hotel[];
}
