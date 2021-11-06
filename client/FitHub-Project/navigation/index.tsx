/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
// import { FontAwesome } from "@expo/vector-icons";
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
import TabOneScreen from "../screens/Information";
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
import GymScrean from "../screens/Gym/Gym";
import Event from "../screens/Events/Events";
import FoodScren from "../screens/Food/Food";
import Login from "../components/auth/signin";
import FirstVue from '../screens/FirstVue/FirstVue'
import signUp from "../components/auth/register";
import INfoPage from "../screens/HomePage/getData/INfoPage";
import myprofile from "../components/myprofile/myprofile";
import { useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FontAwesome } from "@expo/vector-icons";

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */ 

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({}) {
//   useEffect(() => {
//     AsyncStorage.getItem('auth')
//         .then((data) => {
//             if (data !== null) {
//                 navigation.navigate("bmi")
//             }
//             else {
//                 navigation.navigate('signin')
//             }
//         })
// })

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
      <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>


      <Stack.Screen name="Food" component={FoodScren} />
      <Stack.Screen name="Coachs" component={Coachs} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="Gym" component={GymScrean} />
      <Stack.Screen name="Events" component={Event} />
      <Stack.Screen name="coach" component={Coach}  /> 
      <Stack.Screen name="Gymdescription" component={Gym} />
      <Stack.Screen name="bmi" component={INfoPage} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="changeViewProps" component={ChangeView} />
    </Stack.Navigator>
  );
}



/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export  function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
    //should be Log in af ter I puul
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
            // onPress={() => navigation.navigate("Modal")}
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
      component={myprofile}
      options={{
        title: "",
        tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
      }}
    />
  </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
