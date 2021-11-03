import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coach {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    coachName: string; 

    @Column()
    rating: Number; 

    @Column()
    price: Number;

    @Column()
    description: string;
  
    @Column()
    adress: string; 

    @Column()
    user_id : Number; 

    @Column()
    phoneNumber : Number; 

    @Column()
    email : string; 

    @Column()
    imageUrl : string;
}
