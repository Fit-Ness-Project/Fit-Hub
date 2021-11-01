import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './entities/coach.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CoachsService {
  constructor(@InjectRepository(Coach) private coachsRepository: Repository<Coach>) { }
  create(createCoachDto: CreateCoachDto) {
    return  this.coachsRepository.save(createCoachDto);
  }

  findAll(): Promise<Coach[]> {
    return this.coachsRepository.find();
  }

  findOne(id: number): Promise<Coach> {
    return this.coachsRepository.findOne(id);
  }

  update(id: number, updateCoachDto: UpdateCoachDto) {
    return this.coachsRepository.update(id,updateCoachDto);
  }


  async remove(id: number): Promise<void> {
    await this.coachsRepository.delete(id) ;
    }
}
