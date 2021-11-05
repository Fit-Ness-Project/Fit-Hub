import * as React from "react";
import ChangeView from "./HomeVue";
import BlogScreen from "../../../Blogs/Blogs";
import FoodScreen from "../../../Food/Food";
import GymScreen from "../../../Gym/Gym";
import CoachScreen from "../../../../components/coachs/allCoachs";
import EventScreen from "../../../Events/Events";
import TabOneScreen from "../../../Information";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Gymdescription from "../../../../components/Gyms/Gym";

export enum AppScreens {
  ChangeView = "ChangeView",
  BlogScreen = "BlogScreen",
  FoodScreen = "FoodScreen",
  GymScreen = "GymScreen",
  CoachScreen = "CoachScreen",
  EventScreen = "EventScreen",
  TabOneScreen = "TabOneScreen"
}

export type AuthStackParamList = {
  ChangeView: undefined;
  BlogScreen: undefined;
  FoodScreen: undefined;
  GymScreen: undefined;
  CoachScreen: undefined;
  EventScreen: undefined;
  TabOneScreen:undefined;
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
        <AuthStack.Screen name={AppScreens.TabOneScreen} component={TabOneScreen} />
      </AuthStack.Navigator>
    </SafeAreaProvider>
  );
};
export default AuthFlowNavigator;
