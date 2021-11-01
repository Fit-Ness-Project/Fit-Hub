import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    id: Number;
    RecipeTitle: string 
    created_at: Date
    content: string 
    user_id: Number 
    likes: Number
    comments: string 

}
