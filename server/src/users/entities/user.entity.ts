import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import Recipe from '../../recipes/entities/recipe.entity';
import Gym from '../../gyms/entities/gym.entity';
import Event from '../../events/entities/event.entity';



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
    healthy_food_posted: string 
    
    @Column()
    healthy_food_liked: string

    @OneToOne(() => Recipe)
    @JoinColumn()
    recipe: Recipe

    @OneToOne(() => Gym)
    @JoinColumn()
    gym: Gym

    @Column()
    event_created: string

    @OneToOne(() => Event)
    @JoinColumn()
    event: Event

    @Column()
    bmi: number

    @Column()
    weight: number

    @Column()
    height: number
}
