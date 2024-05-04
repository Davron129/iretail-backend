import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    photo: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Product, (product) => product.brand)
    products: Product[]
}
