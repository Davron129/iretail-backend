import { Brand } from 'src/modules/brands/entities/brand.entity';
import { Category } from 'src/modules/categories/entities/category.entity';
import { Shop } from 'src/modules/shop/entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 127, nullable: false })
    title: string;

    @Column({ type: "text",  nullable: false })
    description: string;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category

    @ManyToOne(() => Brand, (brand) => brand.products)
    brand: Brand

    @ManyToOne(() => Shop, (brand) => brand.products)
    shop: Shop

    @Column()
    page_title: string;
  
    @Column({ type: 'text' })
    meta_keywords: string;
  
    @Column({ type: 'text' })
    meta_description: string;
  
    @Column('simple-array')
    tags: string[];
  
    @Column('simple-array')
    images: string[];

    @Column({ type: 'text' })
    image: string;

    @Column({ default: 0 })
    count: number;

    @Column('decimal')
    price: number;

    @Column({ type: "bool", default: true })
    is_active: boolean;
}
