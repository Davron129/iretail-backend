import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ShopService } from './shop.service';
import { CreateShopDto, UpdateShopDto } from './dto';

@ApiTags('shops')
@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @ApiBody({ type: CreateShopDto })
  create(@Body() payload: CreateShopDto) {
    return this.shopService.create(payload);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UpdateShopDto) {
    return this.shopService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }
}
