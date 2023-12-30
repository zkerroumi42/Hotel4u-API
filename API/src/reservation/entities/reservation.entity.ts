import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
