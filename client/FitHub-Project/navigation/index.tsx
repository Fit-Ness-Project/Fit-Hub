import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import Gym from "../components/Gyms/Gym"
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import CommunityScren from "../screens/HomePage/getData/community/communuty";
import Colors from "../constants/Colors";
import Calendar from "../screens/Calendar";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChangeView from "../screens/HomePage/getData/HomeVue/HomeVue";
import Coachs from "../components/coachs/allCoachs";
import Coach from "../components/coachs/coach"
import Blogs from "../screens/Blogs/Blogs";
import blog from "../screens/Blogs/blog";
import GymScrean from "../screens/Gym/Gym";
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
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from "../components/myprofile/EditProfile";
import ProfileInfo from "../components/myprofile/ProfileInfo"

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
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        {/* <Stack.Screen name="Modal" component={ModalScreen} /> */}
      </Stack.Group>
      <Stack.Screen name="Home" component={ChangeView} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Coachs" component={Coachs} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="Gym" component={GymScrean} />
      <Stack.Screen name="Events" component={Event} />
      <Stack.Screen name="coach" component={Coach} />
      <Stack.Screen name="Gymdescription" component={Gym} />
      <Stack.Screen name="bmi" component={Information} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="createEvent" component={createEvent} />
      <Stack.Screen name="blog" component={blog} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Healthy" component={Healthy} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="myProfile" component={ProfileInfo} />

    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={ChangeView}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Calendar}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-o" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScren}
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="myProfile"
        component={ProfileInfo}
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
