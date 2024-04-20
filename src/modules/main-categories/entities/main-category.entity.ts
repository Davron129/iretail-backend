import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 127, nullable: false })
    title: string;

    @Column()
    icon: string;

    @Column({ type: "varchar", length: 127, nullable: false })
    path: string;

    @Column({ type: "bool", default: true })
    is_active: boolean;
}
