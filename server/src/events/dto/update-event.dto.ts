import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  id: number;
  eventName: string;
  url: string;
  user_id: number;
  adress: string;
  description: string;
  date: Date;
  created_by: string;
  created_at: Date;
  created_by_id: number;
}
