import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {PaymentEnum} from "../helper/Enum";


@Entity()
export class PaymentStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: PaymentEnum,
        default: PaymentEnum.COMPLETE
    })
    status: PaymentEnum

    //todo relation one to many

}