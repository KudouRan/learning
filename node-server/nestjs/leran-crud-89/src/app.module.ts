import { Module } from '@nestjs/common';
import { FishModule } from './fish/fish.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

//如果数据库出现auth问题,可以使用mysql2代替mysql包
const NestMySqlModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  //导致无法连接数据库的原因是下面这个属性
  // entities:[],
  //这里没有写,他又没给明确报错
  entities: ['dist/**/*.entity{.ts,.js}'],
  //这样也没错误
  // entities: [Fish],
  synchronize: true,
});

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NestMySqlModule,
    FishModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
