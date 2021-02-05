import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishAdminController } from './admin.controller';
import { FishAdminService } from './admin.service';
import { FishController } from './fish.controller';
import { Fish, Fishes } from './fish.entity';
import { FishService } from './fish.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fish, Fishes])],
  providers: [FishService, FishAdminService],
  controllers: [FishController, FishAdminController],
})
export class FishModule {}
