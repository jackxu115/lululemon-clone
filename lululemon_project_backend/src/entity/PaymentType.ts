import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TypeEnum} from "../helper/Enum";


@Entity()
export class PaymentStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TypeEnum,
        default: TypeEnum.CARD
    })
    type: TypeEnum
    //todo relation one to many

}