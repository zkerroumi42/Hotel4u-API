import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()
export class Facture {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
