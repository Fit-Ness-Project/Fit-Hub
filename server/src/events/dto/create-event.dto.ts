export class CreateEventDto {
  id: number;
  eventName: string;
  url: string;
  user_id: number;
  adress: string;
  description: string;
  date: Date;
  created_by: string;
  created_at: Date;
  created_by_id: number;
}
