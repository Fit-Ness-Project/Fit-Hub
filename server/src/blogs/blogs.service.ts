import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogsService {

  constructor(@InjectRepository(Blog) private blogsRepository: Repository<Blog>) { }

  create(createBlogDto: CreateBlogDto) {
    return this.blogsRepository.save(createBlogDto);
  }

  findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  findOne(id: number): Promise<Blog> {
    return this.blogsRepository.findOne(id);
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogsRepository.update(id,updateBlogDto);

  }

 async remove(id: number): Promise<void> {
  await this.blogsRepository.delete(id) ;
  }
}
