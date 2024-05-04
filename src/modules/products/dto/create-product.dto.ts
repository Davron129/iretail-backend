import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDefined,
  IsOptional,
  IsNumber,
  MaxLength,
  IsArray,
  IsNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @MaxLength(1000)
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  category: number;

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  brand: number;

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  shop: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  page_title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  meta_keywords: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  meta_description: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  tags: string[];

  @IsNotEmpty()
  @IsDefined()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  images: string[];

  @IsNotEmpty()
  @IsNumber()
  count: number;
}
