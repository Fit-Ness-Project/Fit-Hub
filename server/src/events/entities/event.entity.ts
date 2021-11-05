import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Event {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    eventName: string; 

    @Column()
    user_id: Number; 

    @Column()
    adress: string;

    @Column()
    description: string;
  
    @Column()
    date: Date; 

    @Column()
    created_by : string; 

    @Column()
    created_at : Date; 

    @Column()
    created_by_id : Number; 


}
