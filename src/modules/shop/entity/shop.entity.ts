import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

@Entity()
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @Column()
    bio: string;

    @OneToMany(() => Product, (product) => product.brand)
    products: Product[]

    @Column()
    photo: string;

    @Column()
    banner: string;

    @Column({ default: true })
    isActive: boolean;
}
