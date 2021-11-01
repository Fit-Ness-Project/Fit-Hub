import { Module } from '@nestjs/common';
import { CoachsService } from './coachs.service';
import { CoachsController } from './coachs.controller';
import { Coach } from './entities/coach.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CoachsController],
  providers: [CoachsService],
  imports: [TypeOrmModule.forFeature([Coach])]
})

export class CoachsModule {}