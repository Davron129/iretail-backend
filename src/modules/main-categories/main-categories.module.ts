import { Module } from '@nestjs/common';
import { MainCategoriesService } from './main-categories.service';
import { MainCategoriesController } from './main-categories.controller';
import { MainCategory } from './entities/main-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MainCategory])],
  controllers: [MainCategoriesController],
  providers: [MainCategoriesService]
})
export class MainCategoriesModule {}
