import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {StatusEnum} from "../helper/Enum";




@Entity()
export class OrderStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: StatusEnum,
        default: StatusEnum.RECEIVED
    })
    status: StatusEnum

    //todo relation on to many

}