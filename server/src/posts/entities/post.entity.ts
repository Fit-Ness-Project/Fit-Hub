import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    postTitle: string 

    @Column()
    created_at: Date

    @Column()
    content: string 

    @Column()
    user_id: Number 
    
    @Column()
    likes: Number

    @Column()
    comments: string 


}
