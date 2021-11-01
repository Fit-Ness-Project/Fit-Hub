import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private eventsRepository: Repository<Event>) { }
  create(createEventDto: CreateEventDto) {
    return this.eventsRepository.save(createEventDto);
  }

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOne(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventsRepository.update(id,updateEventDto);
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id) ;
    }
}
