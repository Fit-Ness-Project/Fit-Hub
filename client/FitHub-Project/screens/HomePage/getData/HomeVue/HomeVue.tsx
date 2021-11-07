import * as React from "react";
import { View, Text, TouchableOpacity } from "../../../../components/Themed";
import { Image, ScrollView, ImageBackground,StyleSheet } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from'../../../../navigation/index'


export default function ChangeView({}) {
  const navigation = useNavigation()
  return (
    <ScrollView>

    <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
    <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/gymView2.png")}>
       <Text style={styles.text}>Gyms</Text>
        </ImageBackground>
        </TouchableOpacity>
    </View>
    <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
    <TouchableOpacity onPress={() => navigation.navigate("Coachs")}>
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/coach.png")}>
        <Text style={styles.text}>Coachs</Text>
        </ImageBackground>
        </TouchableOpacity>

    </View>
    <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
    <TouchableOpacity onPress={() => navigation.navigate("Food")}>
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/resto.png")}>
        <Text style={styles.text}>Diets</Text>
        </ImageBackground>
        </TouchableOpacity>
    </View>
    <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
    <TouchableOpacity onPress={() => navigation.navigate("Events")}>
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/events.png")}>
        <Text style={styles.text}>Events</Text>
        </ImageBackground>
        </TouchableOpacity>
    </View>
    <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
    <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
    <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/blogs.png")}>
    <Text style={styles.text}>Blogs</Text>
        </ImageBackground>
        </TouchableOpacity>

    </View>


</ScrollView>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        fontWeight: 'bold',
    }
})