import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDefined, IsOptional, IsNumber, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    @MaxLength(127)
    title: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    @MaxLength(255)
    description: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    icon: string;
  
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    parent_id: number;
}
