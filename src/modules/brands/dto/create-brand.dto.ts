import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDefined,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateBrandDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @MaxLength(127)
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  photo: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}