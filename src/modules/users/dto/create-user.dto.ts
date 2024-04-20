import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  lastName: string;

  @ApiProperty()
  @IsBoolean()
  @IsDefined()
  isActive: boolean;
}
