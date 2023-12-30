import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()
export class Consomation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
