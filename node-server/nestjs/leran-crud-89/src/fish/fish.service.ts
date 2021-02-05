import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fish, Fishes } from './fish.entity';
import { CreateFishDto } from './dto/create-fish.dto';

@Injectable()
export class FishService {
  constructor(
    @InjectRepository(Fish) private fishRepository: Repository<Fish>,
    @InjectRepository(Fishes) private fishesRepository: Repository<Fishes>,
  ) {}

  random(m, n) {
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }

  async cratePond() {
    //清空数据库
    try {
      await this.fishRepository.clear();
    } catch (error) {}
    const random = this.random;

    const allFishes = await this.fishesRepository.find();
    const fishesLength = allFishes.length;

    const arr = [];

    for (let i = 0; i < random(10, 20); i++) {
      const fishes = allFishes[random(0, fishesLength - 1)];
      // const fish = await this.fishRepository.save({
      //   id: i,
      //   breed: fishes.name,
      //   fishesId: fishes.id,
      //   weight: Math.floor(Math.random() * 1000) / 100,
      // } as CreateFishDto);

      const weight = Math.floor(Math.random() * 1000) / 100;

      const fish = await this.fishRepository.query(
        `INSERT INTO nest.fish VALUES (${i}, ${weight}, '${fishes.name}', ${fishes.id});`,
      );

      arr.push({
        id: i,
        breed: fishes.name,
        fishesId: fishes.id,
        weight: Math.floor(Math.random() * 1000) / 100,
      });
    }

    return arr;
  }

  async findAll() {
    // return await this.fishRepository.find();
    return await this.fishRepository.query('select * from fish');
  }

  async getOne() {
    const allFish = await this.findAll();
    const fishNum = allFish.length;

    //判断是否没有了
    if (fishNum === 0) {
      return { msg: '恭喜你鱼被钓完了,刷新一下吧' };
    }

    const ranFishId = this.random(0, fishNum - 1);

    //瞎写一个随机获取
    if (this.random(0, fishNum) < ranFishId) {
      return {
        msg: '什么都没有',
      };
    }

    //删除被钓的鱼
    const selectedFish = allFish[ranFishId];

    await this.fishRepository.delete({ id: selectedFish.id });

    return selectedFish;
  }
}
