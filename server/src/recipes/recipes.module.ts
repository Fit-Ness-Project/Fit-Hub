import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { Recipe } from './entities/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  imports: [TypeOrmModule.forFeature([Recipe])]
})
export class RecipesModule {}
