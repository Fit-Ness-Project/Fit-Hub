import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    rest_name: string 

    @Column()
    food_name: string

    @Column()
    rating: Number

    @Column()
    ingredients: string
    
    @Column()
    price: Number

    @Column()
    img_Url: string 

    @Column()
    supp: string 

    @Column()
    longitude: string 


    @Column()
    latitude: string 
    



}
