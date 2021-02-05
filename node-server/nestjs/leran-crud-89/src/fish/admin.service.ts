import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFishesDto } from './dto/create-fishes.dto';
import { Fishes } from './fish.entity';

@Injectable()
export class FishAdminService {
  constructor(
    @InjectRepository(Fishes) private fishRepository: Repository<Fishes>,
  ) {}
  findAll(): Promise<Fishes[]> {
    return this.fishRepository.find();
  }

  findById(id): Promise<Fishes> {
    return this.fishRepository.findOne({ id });
  }

  async updateById(id, createFishesDto: CreateFishesDto) {
    return this.fishRepository.update({ id }, createFishesDto);
  }

  removeById(id) {
    return this.fishRepository.delete({ id });
  }

  create(createFishesDto: CreateFishesDto) {
    return this.fishRepository.save(createFishesDto);
  }
}
