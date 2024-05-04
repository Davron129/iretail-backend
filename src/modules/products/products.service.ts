import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brands/entities/brand.entity';
import { Shop } from '../shop/entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    @InjectRepository(Brand)
    private brandRepo: Repository<Brand>,
    @InjectRepository(Shop)
    private shopRepo: Repository<Shop>,
  ) {}

  private async findCategory(id: number) {
    const category = await this.categoryRepo.findOneBy({ id, is_active: true });

    if(category) {
      return category;
    }

    throw new NotFoundException("Category")
  }

  private async findbrand(id: number) {
    const brand = await this.brandRepo.findOneBy({ id, isActive: true });

    if(brand) {
      return brand;
    }

    throw new NotFoundException("Brand")
  }

  private async findShop(id: number) {
    const shop = await this.shopRepo.findOneBy({ id, isActive: true });

    if(shop) {
      return shop;
    }

    throw new NotFoundException("Shop")
  }

  async create(createProductDto: CreateProductDto) {
    try {
      const category = await this.findCategory(createProductDto.category);
      const brand = await this.findbrand(createProductDto.brand);
      const shop = await this.findShop(createProductDto.shop);

      const product = this.productRepo.create({
        ...createProductDto,
        category,
        brand,
        shop
      });

      return await this.productRepo.save(product);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
