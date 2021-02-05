import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class UniqueExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    //判断是否是因为鱼类名重复造成的错误
    if (exception.code !== 'ER_DUP_ENTRY') {
      //不作处理,直接抛出
      throw exception;
    }

    response.status(400).json({
      statusCode: 400,
      message: '重复的鱼类名',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
