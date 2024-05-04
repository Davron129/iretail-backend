import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entity';
import { CreateShopDto, UpdateShopDto } from './dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
  private shopRepo: Repository<Shop>
  ) {}

  async create(payload: CreateShopDto) {
    try {
      const sjop = this.shopRepo.create(payload);

      return await this.shopRepo.save(sjop);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.shopRepo.findBy({ isActive: true })
  }

  async findOne(id: number) {
    const shop = await this.shopRepo.findOneBy({ id, isActive: true });

    if(shop) {
      return shop;
    }

    throw new NotFoundException("Shop")
  }

  async update(id: number, payload: UpdateShopDto) {
    const shop = await this.findOne(id);

    const updatedShop = Object.assign(shop, payload);
    
    return await this.shopRepo.save(updatedShop);
  }

  async remove(id: number) {
    const shop = await this.findOne(id);

    return this.shopRepo.save({ ...shop, isActive: false })
  }
}
