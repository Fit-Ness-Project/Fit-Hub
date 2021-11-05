import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    id: Number;
    eventName: string; 
    user_id: Number; 
    adress: string;
    description: string;
    date: Date;  
    created_by : string;   
    created_at : Date; 
    created_by_id : Number
}
