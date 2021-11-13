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
   <View style={tw`bg-gray-100`}>
    < ScrollView >
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 88, marginLeft: 15, marginRight: 15 }}>
{FoodData.map((e,k)=>{
return(
<TouchableOpacity key= {k} onPress={() => navigation.navigate("Recipe",{ recipeTitle: e.recipeTitle,
    content: e.content, 
    likes: e.likes,
    imageUrl : e.imageUrl,
    kcal : e.Kcal,  
    fat : e.fat, 
    carb : e.carb, 
    saturates : e.saturates, 
    sugar : e.sugar,  
    fibre : e.fibre,  
    protein : e.protein, 
    salt :e.salt,
    ingredients : e.ingredients, 
    methodes : e.methodes  })}>
       <View key = {k} style={tw` h-36 m-2 flex flex-row bg-gray-100`} >
            <View style={tw`w-3/6 h-full  items-center`} >
              <ImageBackground style={{ width: "100%", height: "100%" }} source={{uri:e.imageUrl}}>
              </ImageBackground>
              <TouchableOpacity style={{ alignItems: "center",position: "absolute",backgroundColor: "#e7ff19", height: 45, width: 175,marginTop:100,opacity:0.7}}
              onPress={() => navigation.navigate("Event")}>
              <Text style={tw` mt-2 font-bold text-lg `}>See More</Text>
            </TouchableOpacity>
            </View>
            <View style={tw`bg-white flex w-3/6 items-center`} >
              <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0 w-full`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>

                      <Text style={{ fontSize: 11, color: "white", textAlign: "center", }}>{e.recipeTitle}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ backgroundColor: "transparent", position: 'absolute', top: 60 }}>
                <AirbnbRating
                  count={5}
                  reviews={["1", "2", "3", "4", "5"]}
                  defaultRating={100 / 2}
                  size={12}
                  showRating={false}
                />
              </View>

              <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" }}>

                <View style={{ height: "100%", width: "28%", bottom: 0, borderWidth: 1, borderColor: "#gray",marginTop:2 }}>
                  <View style={{ backgroundColor: "#36e08b", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray" }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>Kcal</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>{e.Kcal}</Text>
                </View>

                <View style={{ height: "100%", width: "28%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                  <View style={{ backgroundColor: "#36e08b", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray" }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>fat</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14 }}>{e.fat}g</Text>
                </View>

                <View style={{ height: "100%", width: "28%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                  <View style={{ backgroundColor: "#36e08b", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray" }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>carbs</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14 }}>{e.carb}g</Text>
                </View>
              </View>
            </View>      
          </View>
          </TouchableOpacity>
)})}
 
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom:-50, width: "100%" }}>
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