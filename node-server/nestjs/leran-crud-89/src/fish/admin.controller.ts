import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FishAdminService } from './admin.service';
import { CreateFishesDto } from './dto/create-fishes.dto';
import { UniqueExceptionFilter } from './unique.filter';

@ApiTags('fish/admin')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('fish/admin')
export class FishAdminController {
  constructor(private readonly adminService: FishAdminService) {}

  @Get('')
  @ApiOperation({ summary: '管理/获取所有鱼的信息' })
  async findAll() {
    return await this.adminService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '管理/获取一种鱼的信息' })
  findById(@Param('id', ParseIntPipe) id: string) {
    return this.adminService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '管理/按照id修改鱼的信息' })
  updateById(
    @Param('id', ParseIntPipe) id: string,
    @Body() createFishesDto: CreateFishesDto,
  ) {
    return this.adminService.updateById(id, createFishesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '管理/按照id删除某条鱼' })
  removeById(@Param('id', ParseIntPipe) id: string) {
    return this.adminService.removeById(id);
  }

  @Post('')
  @UseFilters(UniqueExceptionFilter) //处理名字重复的报错
  @ApiOperation({ summary: '管理/添加一条鱼' })
  create(@Body() createFishesDto: CreateFishesDto) {
    return this.adminService.create(createFishesDto);
  }
}
