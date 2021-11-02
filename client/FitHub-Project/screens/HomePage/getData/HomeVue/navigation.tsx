import React from "react";
import ChangeView from "./HomeVue";
import Blogs from "../../../Blogs/Blogs";
import FoodScren from "../../../Food/Food";
import GymScrean from "../../../Gym/Gym";
import Coash from "../../../../components/coash/Index";

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";



export enum AppScreens {
  home = 'Home',
  Blog='Blogs',
  Foods='Food',
  Gyms='Gym',
  Coashes='Coash'
}
export type AuthStackParamList = {
    home: undefined;
    Blogs: undefined;
    Food: undefined;
    Gym: undefined;
    Coash: undefined
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <SafeAreaProvider>
        <AuthStack.Navigator  >
            <AuthStack.Screen name={AppScreens.home} component={ChangeView} />
            <AuthStack.Screen name={AppScreens.Foods} component={FoodScren} />
            <AuthStack.Screen name={AppScreens.Blog} component={Blogs} />
            <AuthStack.Screen name={AppScreens.Gyms} component={GymScrean} />
            <AuthStack.Screen name={AppScreens.Coashes} component={Coash} />
        </AuthStack.Navigator>
        </SafeAreaProvider>
    );
};
export default AuthFlowNavigator;