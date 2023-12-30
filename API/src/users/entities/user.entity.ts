import { Role } from "src/auth/interface/Role";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nom: string;
    @Column()
    prenom: string;

    @Column({default: 'Admin' })
    userName: string;

    @Column({default: 'password' })
    password: string;

    @Column({default: 'exemple@email.com' })
    email: string;


    @Column({nullable:true})
    role: Role;

    @Column({nullable:true})
    userUUID: string;
}