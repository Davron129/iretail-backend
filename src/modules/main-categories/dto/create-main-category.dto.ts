import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDefined, IsOptional } from "class-validator";

export class CreateMainCategoryDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    title: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    icon: string;
}
