import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
    id: Number

    rest_name: string 

    
    food_name: string

    
    rating: Number

    
    ingredients: string
    
    
    price: Number 

    img_Url: string 
    
    
    supp: string 

    longitude : string 

    latitude : string


}
