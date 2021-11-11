import * as React from "react";
import ChangeView from "./HomeVue";
import BlogScreen from "../../../Blogs/Blogs";
import FoodScreen from "../../../Food/Food";
import GymScreen from "../../../Gym/Gym";
import CoachScreen from "../../../../components/coachs/allCoachs";
import EventScreen from "../../../Events/Events";
import Login from "../../../../components/auth/signin";
import signUp from "../../../../components/auth/register";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Restaurant from "../../../restaurants/restaurant";

import Gymdescription from "../../../../components/Gyms/Gym";

export enum AppScreens {
  ChangeView = "ChangeView",
  BlogScreen = "BlogScreen",
  FoodScreen = "FoodScreen",
  GymScreen = "GymScreen",
  CoachScreen = "CoachScreen",
  EventScreen = "EventScreen",
  Login='Login',
  signUp='signUp',
  Restaurant='Restaurant'
}

export type AuthStackParamList = {
  ChangeView: undefined;
  BlogScreen: undefined;
  FoodScreen: undefined;
  GymScreen: undefined;
  CoachScreen: undefined;
  EventScreen: undefined;
  Login:undefined,
  signUp:undefined,
  Restaurant:undefined

};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <AuthStack.Navigator>
        <AuthStack.Screen name={AppScreens.ChangeView} component={ChangeView} />
        <AuthStack.Screen name={AppScreens.FoodScreen} component={FoodScreen} />
        <AuthStack.Screen name={AppScreens.BlogScreen} component={BlogScreen} />
        <AuthStack.Screen name={AppScreens.GymScreen} component={GymScreen} />
        <AuthStack.Screen name={AppScreens.CoachScreen} component={CoachScreen} />
        <AuthStack.Screen name={AppScreens.EventScreen} component={EventScreen} />
        <AuthStack.Screen name={AppScreens.Login} component={Login} />
        <AuthStack.Screen name={AppScreens.signUp} component={signUp} />
        <AuthStack.Screen name={AppScreens.Restaurant} component={Restaurant} />

      </AuthStack.Navigator>
    </SafeAreaProvider>
  );
};
export default AuthFlowNavigator;
