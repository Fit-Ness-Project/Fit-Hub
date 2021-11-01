import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    recipeTitle: string 

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
