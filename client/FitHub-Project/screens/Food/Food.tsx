import * as React from "react";
import { useEffect, useState, useRef } from 'react'
import { FoodR } from "./interface";
import axios from "axios";
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  TextInput,
  ImageBackground, ScrollView
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";
import { useNavigation } from '@react-navigation/core';
import tw from "tailwind-react-native-classnames";

const screenWidth = Dimensions.get('screen').width;

export default function Food() {

  return (

    < ScrollView >
      <View style={tw`bg-gray-100`}>

        {/* {coachData.map((item, k) => ( */}



        <View style={tw` h-36 mt-2 flex flex-row bg-white`} >

          <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/food.png")}>
              <View style={tw`bg-transparent h-16 absolute inset-x-0 bottom-10  w-full`}>
                <View style={styles.view}>

                  <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                    <Text style={tw`text-black text-xl pl-2 font-bold`}>Salade Cesar</Text>
                  </View>

                </View>
              </View>
            </ImageBackground>
         
          </View>
          <View style={tw`bg-white flex w-2/5 items-center`} >


            <Text style={tw`pl-6 mt-14 items-center`} >
              Calories things
            </Text>


          </View>

        </View>


        {/* ))} */}
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: .7
  }

})