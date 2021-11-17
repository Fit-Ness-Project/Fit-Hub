import * as React from "react";
import { useEffect, useState, useRef } from 'react'
import { FoodR } from "./interface";
import axios from "axios";
import {
  StyleSheet,
  Dimensions,
  ImageBackground, ScrollView, TouchableOpacity
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";
import { useNavigation } from '@react-navigation/core';
import tw from "tailwind-react-native-classnames";
import { AirbnbRating } from "react-native-ratings";
import Footer from "../Footer/Footer";




const screenWidth = Dimensions.get('screen').width;
export default function Food() {
  const navigation = useNavigation()
  const [FoodData, setFoodData] = useState<FoodR[]>([]);
  useEffect(() => {
    axios
      .get("https://fithub-tn-app.herokuapp.com/recipes")
      .then((response) => {
        setFoodData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
  
    <View style={tw` items-center bg-gray-100`}>
      < ScrollView style={{ marginBottom: 60 }}>
        {FoodData.map((e,k)=>{
          return (
            
        <View key={k} style={{ alignItems: "center", marginTop: 10, marginBottom:10, marginLeft: 15, marginRight: 15 }}>
          <View style={tw` h-36  flex flex-row bg-white m-2`} >
            <View style={tw`w-3/6 h-full  items-center`} >
              <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri:e.imageUrl}}>
              </ImageBackground>
            </View>
            <View style={tw`bg-white flex flex-row w-3/6 items-center`} >
              <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0 w-full items-center`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>
                      <Text style={{ fontSize: 11, color: "white", textAlign: "center", }}>{e.recipeTitle}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ height: 50, width: "50%",alignItems:"center", flexDirection: "row", backgroundColor: "transparent", marginTop: 16, marginLeft: 28 }}>
                {/* <Image style={tw`w-4 h-4 ml-3`} source={require("../../assets/Icons/coins.png")}/> */}
                {/* <Text style={tw`pl-2`}>{e.price}TND</Text> */}
              </View>
              <View style={{ alignItems: "center", marginBottom: -112, marginLeft: -84,justifyContent:"center" }}>
              <TouchableOpacity style={{ height: 32, width: 120, backgroundColor: "#36E08B", alignItems: "center", opacity: .7 }}
   onPress={() => navigation.navigate("Recipe", {
    recipeTitle: e.recipeTitle,
    content: e.content,
    likes: e.likes,
    imageUrl: e.imageUrl,
    kcal: e.kcal,
    fat: e.fat,
    carb: e.carb,
    saturates: e.saturates,
    sugar: e.sugar,
    fibre: e.fibre,
    protein: e.protein,
    salt: e.salt,
    ingredients: e.ingredients,
    methodes: e.methodes
  })}>
    <Text style={tw`mt-1  font-bold `}>See More</Text>
  </TouchableOpacity> 
              </View>
            </View>
          </View>
        </View>
          )
        })}
        </ScrollView>
      <View style={{ top: 685, width: "100%",position: "absolute"}}>
        <Footer />
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  
  view: {
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: .7
  }, inview: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  
})
{/* <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#e7ff19", height: 45, width: 175}}
   onPress={() => navigation.navigate("Recipe", {
    recipeTitle: e.recipeTitle,
    content: e.content,
    likes: e.likes,
    imageUrl: e.imageUrl,
    kcal: e.kcal,
    fat: e.fat,
    carb: e.carb,
    saturates: e.saturates,
    sugar: e.sugar,
    fibre: e.fibre,
    protein: e.protein,
    salt: e.salt,
    ingredients: e.ingredients,
    methodes: e.methodes
  })}>
    <Text style={tw` mt-2 font-bold text-lg `}>See More</Text>
  </TouchableOpacity> */}