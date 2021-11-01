export class CreateGymDto {
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
