export interface Profile {
  // address: String;
  // image: String;
  id: number;
  first_name: string;
  last_name: string;
  mobile_phone: number;
  email: string;
  likes: number;
  comments: string;
  hashed_password: string;
  last_login: Date;
  registred_at: Date;
  events_joined: string;
  healthy_food_posted: string;
  healthy_food_liked: string;
  healthy_food: string;
  gyms: string;
  event_created: string;
  event_joined_id: number;
  bmi: number;
  weight: number;
  height: number;
  age: number;
  gender: string;
}
