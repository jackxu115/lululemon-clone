import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Length} from "class-validator";
import {ProvinceEnum} from "../helper/Enum";


@Entity()
export class Billing {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 100)
    firstName: string;

    @Column()
    @Length(1, 100)
    lastName: string;

    @Column()
    @Length(1, 100)
    address: string;

    @Column()
    @Length(1, 100)
    city: string;

    @Column({
        type: "enum",
        enum: ProvinceEnum,
    })
    province: string;

    @Column()
    @Length(1, 100)
    postalCode: string;
}