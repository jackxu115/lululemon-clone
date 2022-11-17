import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Length, Max, Min} from "class-validator";


@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardNumber: number;

    @Column()
    @Length(1, 10)
    expiryDate: string;

    @Column()
    @Min(3)
    @Max(4)
    cvv: number;

    @Column()
    @Length(1, 100)
    cardHolderName: string

    // todo one to one

    // todo one to many

    // todo many to one

}