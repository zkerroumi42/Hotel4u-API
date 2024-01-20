import { Chambre } from "src/chambres/entities/chambre.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { User } from "src/users/entities/user.entity";
import { Ville } from "src/villes/entities/ville.entity";
import { Entity,PrimaryGeneratedColumn,Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
@Entity() //sql database connection
export class Hotel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    telephone: string;
    @Column()
    type: string;
    @Column({ type: 'float' })
    Budget:number;
    @Column()
    logo: string;
    @Column()
    facebook: string;
    @Column()
    instagrame: string;
    @Column()
    youtube: string;
    @Column()
    longitude:number;
    @Column()
    latitude:number;

    // relations entre tables
    
    @ManyToOne(()=> Ville,(ville)=>ville.hotels)
    ville:Ville;

    @ManyToOne(()=> User,(user)=>user.hotels)
    user:User;
    

    @OneToMany(()=> Chambre,(chambre)=>chambre.hotel)
    chambres:Chambre[];

    
}
