import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { Gym } from './entities/gym.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [GymsController],
  providers: [GymsService],
  imports: [TypeOrmModule.forFeature([Gym])]
})
export class GymsModule {}
