import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

// 自定义pipe验证id是否满足要求
@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    //使用mongoose带的ObjectId对字符串进行验证
    // if (!Types.ObjectId.isValid(value)) {
    //   // 这里传一个数组是为和ValidationPipe统一
    //   throw new BadRequestException(['Id Validation failed']);
    // }

    if (!isMongoId(value)) {
      // 这里传一个数组是为和ValidationPipe统一
      throw new BadRequestException(['Id Validation failed']);
    }
    //如果没有问题,将值放行
    return value;
  }
}
