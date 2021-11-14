
import { NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Gym from "../components/Gyms/Gym"
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChangeView from "../screens/HomePage/getData/HomeVue/HomeVue";
import Coachs from "../components/coachs/allCoachs";
import Coach from "../components/coachs/coach"
import Blogs from "../screens/Blogs/Blogs";
import blog from "../screens/Blogs/blog";
import Event from "../screens/Events/Events";
import Food from "../screens/Food/Food";
import Login from "../components/auth/signin";
import FirstVue from '../screens/FirstVue/FirstVue'
import signUp from "../components/auth/register";
import Information from "../screens/Information";
import Recipe from '../screens/Food/OneRecipe'
import Restaurant from "../screens/restaurants/restaurant";
import Healthy from '../screens/restaurants/Healthy'
import { createEvent } from "../screens/Events/createEvent"
import Register from "../components/auth/register";
import EditProfile from "../components/myprofile/EditProfile";
import ProfileInfo from "../components/myprofile/ProfileInfo";
import Gyms from "../components/Gyms/Gyms"
import event from "../screens/Events/event";


export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function RootNavigator({ }) {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={FirstVue}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name="Home" component={ChangeView} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Coachs" component={Coachs} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="Events" component={Event} />
      <Stack.Screen name="coach" component={Coach} />
      <Stack.Screen name="Gym" component={Gym} />
      <Stack.Screen name="bmi" component={Information} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="createEvent" component={createEvent} />
      <Stack.Screen name="blog" component={blog} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Healthy" component={Healthy} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Gyms" component={Gyms} />
      <Stack.Screen name="event" component={event} />
    </Stack.Navigator>
  );
}






