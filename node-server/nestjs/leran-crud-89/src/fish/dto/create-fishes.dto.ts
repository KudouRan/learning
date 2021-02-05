import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFishesDto {
  @ApiProperty({ description: '每公斤单价', example: 12.69 })
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: '鱼的品种名', example: '鲤鱼' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
