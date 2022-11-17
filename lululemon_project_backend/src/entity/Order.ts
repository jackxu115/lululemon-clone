import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Length, length, Min} from "class-validator";
import OrderStatus from "../routes/orderStatus";


@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', {scale: 2})
    @Min(0)
    itemTotal: number;

    @Column('decimal', {precision: 5, scale: 2, default: 1.05})
    @Min(1)
    taxRate: number;

    @Column('decimal', {scale: 2})
    @Min(1)
    tax: number;

    @Column('decimal', {scale: 2})
    @Min(0)
    total: number;

    @Column()
    @Length(1,10)
    @Generated("uuid")
    orderNumber: string;

    @Column("simple-array")
    products: string[]

    @Column({nullable: true, default: false})
    isActive: boolean;

    @Column({nullable: true, default: false})
    isDelete: boolean;

    @Column()
    @CreateDateColumn()
    create: Date

    @Column()
    @UpdateDateColumn()
    update: Date

    // todo relation many to one
}