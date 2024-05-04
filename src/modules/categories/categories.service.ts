import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(payload: CreateCategoryDto) {
    try {
      const parent = await this.categoryRepo.findOneBy({ id: payload.parent_id })

      const data = await this.categoryRepo.save({
        title: payload.title,
        parent,
        icon: payload.icon,
        path: payload.title.toLowerCase(),
        description: payload.description
      })

      return await this.categoryRepo.save(data);
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()      
    }
  }

  findAll() {
    return this.categoryRepo.find({
      relations: ["parent"]
    })
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });

    if(category) {
      return category
    }
    
    throw new NotFoundException("Category not found");
  }

  async update(id: number, payload: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOneBy({ id });
    
    if(!category) {
      throw new NotFoundException("Category not found");
    }

    const updatedCategory = Object.assign(category, payload);

    return await this.categoryRepo.save(updatedCategory);
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });

    if(category) {
      return this.categoryRepo.save({ ...category, is_active: false });
    }

    throw new NotFoundException("Category not found")
  }
}
