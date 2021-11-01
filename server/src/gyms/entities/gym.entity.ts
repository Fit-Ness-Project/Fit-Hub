import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gym {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    gymName: string;

    @Column()
    imgUrl: string;

    @Column()
    rating: Number;

    @Column()
    description: string;

    @Column()
    fields: string;

    @Column()
    price: Number;
    
    @Column()
    user_id: Number

   @Column()
   isAvailable: boolean;
 
   @Column()
   latitude :  string;

   @Column()
   longitude :  string;


}
