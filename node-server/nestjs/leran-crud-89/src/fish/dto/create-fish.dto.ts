import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFishDto {
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: '重量/kg', example: 6.6 })
  @IsNotEmpty()
  weight: number;

  @ApiProperty({ description: '鱼的品种', example: '鲤鱼' })
  @IsNotEmpty()
  breed: string;

  //外键
  fishesId: number;
}
