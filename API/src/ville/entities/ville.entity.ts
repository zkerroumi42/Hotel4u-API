import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()
export class Ville {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
