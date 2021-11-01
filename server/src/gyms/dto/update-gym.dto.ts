import { PartialType } from '@nestjs/mapped-types';
import { CreateGymDto } from './create-gym.dto';



export class UpdateGymDto extends PartialType(CreateGymDto) {
    id: Number;
    gymName: string;
    imgUrl: string;
    rating: Number;
    description: string;
    fields: string;
    price: Number;   
    user_id: Number
   isAvailable: boolean;
   latitude :  string;
   longitude :  string;
}
