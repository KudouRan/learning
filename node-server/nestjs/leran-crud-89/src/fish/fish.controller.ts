import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FishService } from './fish.service';

@ApiTags('fish')
@Controller('fish')
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @Get()
  @ApiOperation({ summary: '获取鱼塘中鱼的信息' })
  find() {
    return this.fishService.findAll();
  }

  @Get('fishing')
  @ApiOperation({ summary: '钓鱼(随机获得一条或空钓)' })
  getOne() {
    return this.fishService.getOne();
  }

  @Get('reform')
  @ApiOperation({ summary: '更换鱼塘(随机刷新成一个新鱼塘)' })
  cratePond() {
    return this.fishService.cratePond();
  }
}
