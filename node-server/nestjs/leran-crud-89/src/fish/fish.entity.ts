import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Fishes {
  // 自动生成主键
  @PrimaryGeneratedColumn()
  id: number;

  //主键
  @Column({
    unique: true,
  })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'float', default: 0.0 })
  @IsNotEmpty()
  price: number;

  //一对多的关系
  //一个品种的鱼能有多个
  @OneToMany(
    type => Fish,
    fish => fish.fishes,
  )
  fish: Fish[];
}

@Entity()
export class Fish {
  @PrimaryColumn()
  @IsNotEmpty()
  id: number;

  @Column({ type: 'float', default: 0.0 })
  @IsNotEmpty()
  weight: number;

  @Column()
  @IsNotEmpty()
  breed: string;

  //多对一的关系,多条鱼对应一个鱼类
  //会为fish表创建一个外键(fishesId)
  @ManyToOne(
    type => Fishes,
    fishes => fishes.fish,
  )
  fishes: Fishes;
}
