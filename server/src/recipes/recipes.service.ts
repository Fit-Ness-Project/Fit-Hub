import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {Recipe} from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RecipesService {
  
    constructor(@InjectRepository(Recipe) private recipesRepository: Repository<Recipe>) {}
    create(createRecipeDto: CreateRecipeDto) {
      return this.recipesRepository.save(createRecipeDto);
    }
  
    findAll(): Promise<Recipe[]> {
      return this.recipesRepository.find();
    }
  
    findOne(id: number): Promise<Recipe> {
      return this.recipesRepository.findOne(id);
    }
  
    update(id: number, updateRecipeDto: UpdateRecipeDto) {
      this.recipesRepository.update(id,updateRecipeDto);
    }
  
    async remove(id: number): Promise<void> {
      await this.recipesRepository.delete(id) ;
      }
  }
  