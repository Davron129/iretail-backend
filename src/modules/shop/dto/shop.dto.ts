import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsDefined,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateShopDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @MaxLength(127)
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @MaxLength(127)
  link: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  photo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  banner: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}

export class UpdateShopDto extends PartialType(CreateShopDto) {}
