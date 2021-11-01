import { PartialType } from '@nestjs/mapped-types';
import { CreateCoachDto } from './create-coach.dto';

export class UpdateCoachDto extends PartialType(CreateCoachDto) {
    id: Number;
    coachName: string; 
    rating: Number; 
    price: Number;
    description: string;
    adress: string; 
    user_id : Number; 
    latitude :  string;
    logitude :  string;
}
