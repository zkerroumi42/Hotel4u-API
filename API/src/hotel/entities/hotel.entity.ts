import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()//sql database connection
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

}
