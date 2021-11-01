import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()

export class AdminService {
  constructor(@InjectRepository(Admin) private adminsRepository: Repository<Admin>) { }

  create(createAdminDto: CreateAdminDto) {
    return this.adminsRepository.save(createAdminDto);
  }

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminsRepository.findOne(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminsRepository.update(id,updateAdminDto);
  }

  async remove(id: number): Promise<void> {
  await this.adminsRepository.delete(id) ;
  }
  
}
