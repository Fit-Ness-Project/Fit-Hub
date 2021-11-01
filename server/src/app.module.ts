import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GymsModule } from './gyms/gyms.module';
import { EventsModule } from './events/events.module';
import { CoachsModule } from './coachs/coachs.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RecipesModule } from './recipes/recipes.module';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { BlogsModule } from './blogs/blogs.module';
import { GoogleStrategy } from './google.strategy';



@Module({
  imports: [ TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "slim",
    "password": "Whenimgoneeminem12345",
    "database": "fithub-database",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), UsersModule, GymsModule, EventsModule, CoachsModule, RestaurantsModule, RecipesModule, AdminModule, PostsModule, BlogsModule,],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})


export class AppModule {}

