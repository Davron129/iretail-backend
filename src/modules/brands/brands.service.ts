import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
  private brandRepo: Repository<Brand>
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const brand = this.brandRepo.create(createBrandDto);

      return await this.brandRepo.save(brand);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.brandRepo.findBy({ isActive: true })
  }

  async findOne(id: number) {
    const brand = await this.brandRepo.findOneBy({ id, isActive: true });

    if(brand) {
      return brand;
    }

    throw new NotFoundException("Brand")
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.findOne(id);

    const updatedBrand = Object.assign(brand, updateBrandDto);
    
    return await this.brandRepo.save(updatedBrand);
  }

  async remove(id: number) {
    const brand = await this.findOne(id);

    return this.brandRepo.save({ ...brand, isActive: false })
  }
}
