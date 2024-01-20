import { Hotel } from "src/hotels/entities/hotel.entity";
import { User } from "src/users/entities/user.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    message: string;
    @Column()
    status: string;

    @ManyToOne(()=> User,(user)=>user.Notifications)
    user:User;
    
   
}
