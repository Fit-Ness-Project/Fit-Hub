import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import {Gym } from './entities/gym.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GymsService {
  constructor(@InjectRepository(Gym) private gymsRepository: Repository<Gym>) { }
  create(createGymDto: CreateGymDto) {
    return this.gymsRepository.save(createGymDto);
  }

  findAll(): Promise<Gym[]> {
    return this.gymsRepository.find();
  }

  findOne(id: number): Promise<Gym> {
    return this.gymsRepository.findOne(id);
  }

  update(id: number, updateGymDto: UpdateGymDto) {
    return this.gymsRepository.update(id,updateGymDto);
  }

  async remove(id: number): Promise<void> {
    await this.gymsRepository.delete(id) ;
    }
}

