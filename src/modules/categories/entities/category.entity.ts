import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, OneToMany } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 127, nullable: false })
    title: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    description: string;

    @Column()
    icon: string;

    @Column({ type: "varchar", length: 127, nullable: false })
    path: string;

    @TreeChildren()
    children: Category[]

    @TreeParent()
    parent: Category;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]

    @Column({ type: "bool", default: true })
    is_active: boolean;
}
