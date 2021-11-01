import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {

    id: Number;
    user_id: Number;
    blogTitle: string;
    imageUrl: string;
    content: string;
    date: Date;
    comment: string;   
    comment_count: Number
    like: Number;
    
}
