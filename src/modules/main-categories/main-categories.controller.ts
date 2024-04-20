import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MainCategoriesService } from './main-categories.service';
import { CreateMainCategoryDto } from './dto/create-main-category.dto';
import { UpdateMainCategoryDto } from './dto/update-main-category.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags("main-categories")
@Controller('main-categories')
export class MainCategoriesController {
  constructor(private readonly mainCategoriesService: MainCategoriesService) {}

  @Post()
  @ApiBody({ type: CreateMainCategoryDto })
  create(@Body() createMainCategoryDto: CreateMainCategoryDto) {
    return this.mainCategoriesService.create(createMainCategoryDto);
  }

  @Get()
  findAll() {
    return this.mainCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMainCategoryDto: UpdateMainCategoryDto) {
    return this.mainCategoriesService.update(+id, updateMainCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainCategoriesService.remove(+id);
  }
}
