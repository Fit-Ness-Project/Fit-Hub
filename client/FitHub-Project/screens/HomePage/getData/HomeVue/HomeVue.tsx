import * as React from "react";
import { View, Text, TouchableOpacity } from "../../../../components/Themed";
import { Image, ScrollView, ImageBackground } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';

export default function ChangeView({

}) {
  const navigation = useNavigation()
  return (
    <ScrollView>
     
      <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/gymView2.png")}>
        </ImageBackground>

      </View>
      <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/coach.png")}>
        </ImageBackground>

      </View>
      <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/restoo.jpeg")}>
        </ImageBackground>

      </View>
      <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
        <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/events.jpg")}>
        </ImageBackground>
      </View>
      <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} ></View>


    </ScrollView>
  );
}
