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
  Recipe:{
    recipeTitle: string ;
    content: string ;
    likes: number;
    imageUrl : string;
    kcal : number  ;
    fat : number ;
    carb : number ;
    saturates : number ;
    sugar : number ;
    fibre : number ;
    protein : number; 
    salt :number;
    ingredients : string ;
    methodes : string  ;
  };
  Blogs: undefined;
  blog:{
    blogTitle: string;
    imageUrl: string;
    content: string;
    like: number;
    author: string;
    date:any;
  }
  // Gym: undefined;
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
  Event:undefined;
  bmi : undefined;
  Gym:{ 
 
    gymName: string,
    imgUrl: string,
    rating: number,
    description: string,
    fields: string,
    price: number ,

   latitude :  string;
   longitude :  string;
   adress: string;
   phoneNumber: number;
     };
     login:undefined;
     signUp:undefined;
     FirstVueProps:undefined;
     createEvent:undefined;
     register:undefined;
     Food:undefined;

     Restaurant : undefined;
     Healthy:{
      rest_name: string;
      food_name: string;
      rating: number;  
      ingredients: string;
      price: number;
      img_Url: string;
      supp: string;
      longitude: string;
      latitude: string;
     };
     EditProfile:undefined
     BottomTabNavigator:undefined;
     ProfileInfo:undefined
     Gyms:undefined;
     oneRecipe : undefined;
     event : undefined;

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Gyms:undefined;
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
  Event: undefined;
  bmi : undefined;
  login:undefined;
   signUp:undefined;
  coach : undefined;
  // Gymdescription:undefined;
  myProfile:undefined;
  FirstVueProps:undefined;
  createEvent:undefined;
  blog:undefined;
  register:undefined;
  Recipe:undefined;
  Restaurant:undefined;
  ProfileInfo:undefined
  Healthy:{
    id: number;
    rest_name: string ;
    food_name : string;
    rating : number;
    price : number ;
    ingredients: string ;
    supp: string ;
    img_Url :string ; 
     };
     EditProfile:undefined
  BottomTabNavigator:undefined;
  oneRecipe : undefined;
  event : undefined;

};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
