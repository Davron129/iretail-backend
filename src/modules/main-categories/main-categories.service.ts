import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMainCategoryDto } from './dto/create-main-category.dto';
import { UpdateMainCategoryDto } from './dto/update-main-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MainCategory } from './entities/main-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainCategoriesService {
  constructor(
    @InjectRepository(MainCategory)
    private mainCategoryRepo: Repository<MainCategory>,
  ) {}

  async create(payload: CreateMainCategoryDto) {
    try {
      const newCategory = this.mainCategoryRepo.create(payload)
      newCategory.path = ""

      const category = await this.mainCategoryRepo.save(newCategory);
      category.path = [category.title, category.id].join("-");

      return await this.mainCategoryRepo.save(category);
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()      
    }
  }

  findAll() {
    return `This action returns all mainCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mainCategory`;
  }

  update(id: number, updateMainCategoryDto: UpdateMainCategoryDto) {
    return `This action updates a #${id} mainCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} mainCategory`;
  }
}
