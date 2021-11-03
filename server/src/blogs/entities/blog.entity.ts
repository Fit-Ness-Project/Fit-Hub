import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    user_id: Number

    @Column()
    blogTitle: string;

    @Column()
    imageUrl: string;

    @Column()
    content: string;

    @Column()
    date: Date;
   
    @Column()
    comment: string;
    
    @Column()
    comment_count: Number

    @Column()
    like: Number;

}
