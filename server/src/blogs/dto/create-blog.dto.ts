export class CreateBlogDto {
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
