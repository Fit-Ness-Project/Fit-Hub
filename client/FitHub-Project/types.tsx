/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 


export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Food: undefined;
  Blogs: undefined;
  blog:{
     id: number;
      blogTitle: string; 
      imageUrl: string; 
      content: string;
      date: Date;
      comment: string;
      comment_count: Number; 
      like: Number;
  }
  Gym: undefined;
  Coachs: undefined;
  coach: {
    coachId : number ,
    coachName : string,
    rating: number, 
    price: number,
    description: string,
    adress: string,   
    phoneNumber : number, 
    email : string,
    imageUrl : string
  };
  Home: undefined;
  Events: undefined;
  bmi : undefined;
  Gymdescription:{GymId:Number,
     gymName: string;
    imgUrl: string;
    rating: Number;
    description: string;
    fields: string;
    price: Number;
     };
    
     login:undefined;
     signUp:undefined;
     FirstVueProps:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  UserInfo: undefined;
  Community: undefined;
  Food: undefined;
  Blogs:undefined;
  Gym: undefined;
  Coachs: undefined;
  Home: undefined;
  Events: undefined;
  bmi : undefined;
  login:undefined;
   signUp:undefined;
  coach : undefined;
  Gymdescription:{GymId:number};
  myProfile:undefined;
  FirstVueProps:undefined;
  blog:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
