import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    id: Number;
    postTitle: string 
    created_at: Date
    content: string 
    user_id: Number 
    likes: Number
    comments: string 
}
