/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export default class Event {
  @PrimaryGeneratedColumn()
  id: number;



  @Column()
  eventName: string;

  @Column()
  url:string;

  @Column()
  user_id: number;

  @Column()
  adress: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  created_by: string;

  @Column()
  created_at: Date;

  @Column()
  created_by_id: number;
}
