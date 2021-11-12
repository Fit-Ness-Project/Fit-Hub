import * as React from "react";
import ChangeView from "./HomeVue";
import BlogScreen from "../../../Blogs/Blogs";
import FoodScreen from "../../../Food/Food";
import CoachScreen from "../../../../components/coachs/allCoachs";
import EventScreen from "../../../Events/Events";
import Login from "../../../../components/auth/signin";
import signUp from "../../../../components/auth/register";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../../../restaurants/restaurant";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD


=======
import Gyms from "../../../../components/Gyms/Gyms";
>>>>>>> 405d73f2cc764f9d7605cd9600d3d41c8fe111eb
export enum AppScreens {
  ChangeView = "ChangeView",
  BlogScreen = "BlogScreen",
  FoodScreen = "FoodScreen",
  GymScreen = "GymScreen",
  CoachScreen = "CoachScreen",
  EventScreen = "EventScreen",
  Login = "Login",
  signUp = "signUp",
  Restaurant = "Restaurant",
  ProfileInfo = "ProfileInfo",
  Gyms = "Gyms"
}


export type AuthStackParamList = {
  ChangeView: undefined;
  BlogScreen: undefined;
  FoodScreen: undefined;
  Gyms: undefined;
  CoachScreen: undefined;
  EventScreen: undefined;
  Login: undefined;
  signUp: undefined;
  Restaurant: undefined;
  ProfileInfo: undefined;
};


const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthFlowNavigator: React.FunctionComponent = () => {

  
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name={AppScreens.ChangeView} component={ChangeView} />
        <AuthStack.Screen name={AppScreens.FoodScreen} component={FoodScreen} />
        <AuthStack.Screen name={AppScreens.BlogScreen} component={BlogScreen} />
        <AuthStack.Screen name={AppScreens.Gyms} component={Gyms} />
        <AuthStack.Screen
          name={AppScreens.CoachScreen}
          component={CoachScreen}
        />
        <AuthStack.Screen
          name={AppScreens.EventScreen}
          component={EventScreen}
        />
        <AuthStack.Screen name={AppScreens.Login} component={Login} />
        <AuthStack.Screen name={AppScreens.signUp} component={signUp} />
        <AuthStack.Screen name={AppScreens.Restaurant} component={Restaurant} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
export default AuthFlowNavigator;




