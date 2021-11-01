import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    first_name: string 

    @Column()
    last_name: string

    @Column()
    mobile_phone: Number

    @Column()
    email: string
    
    @Column()
    likes: Number

    @Column()
    comments: string 

    @Column()
    hashed_password: string 
    
    @Column()
    last_login: Date 

    @Column()
    registred_at: Date 

    @Column()
    events_joined: string 

    @Column()
    healthy_food_posted: string 
    
    @Column()
    healthy_food_liked: string

    @Column()
    healthy_food: string 

    @Column()
    gyms: string 

    @Column()
    event_created: string

    @Column()
    event_joined_id: number

    @Column()
    bmi: number

    @Column()
    weight: number

    @Column()
    height: number
}
