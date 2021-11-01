import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Restaurant} from './entities/restaurant.entity'

@Injectable()
export class RestaurantsService {
  
  constructor(@InjectRepository(Restaurant) private retaurantsRepository: Repository<Restaurant>) {}
  create(createUserDto: CreateRestaurantDto) {
    return this.retaurantsRepository.save(createUserDto);
  }

  findAll(): Promise<Restaurant[]> {
    return this.retaurantsRepository.find();
  }

  findOne(id: number): Promise<Restaurant> {
    return this.retaurantsRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateRestaurantDto) {
    this.retaurantsRepository.update(id,updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.retaurantsRepository.delete(id) ;
    }
}