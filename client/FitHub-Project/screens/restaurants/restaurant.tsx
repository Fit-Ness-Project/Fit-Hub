import * as React from "react";
import { useEffect, useState, useRef } from 'react'
import { RestaurantR } from "./interface";
import axios from "axios";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView, ImageBackground,
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";





import { useNavigation } from '@react-navigation/core';
import tw from "tailwind-react-native-classnames";
import Footer from "../Footer/Footer";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const screenWidth = Dimensions.get("screen").width;



export default function Restaurant() {
  let flatListRef = useRef<FlatList<RestaurantR> | null>();
  const [restData, setRestData] = useState<RestaurantR[]>([]);
  const navigation = useNavigation()



  useEffect(() => {
    axios
      .get('https://fithub-tn-app.herokuapp.com/restaurants')

      .then((response) => {

        setRestData(response.data)


      })
      .catch((error) => {
        console.log(error);
      });

  }, [])


  return (

    <View style={tw` items-center bg-gray-100`}>
      < ScrollView style={{ marginBottom: 60 }}>
        {restData.map((e, k) => {
          return (

            <View key={k} style={{ alignItems: "center", marginTop: 10, marginBottom: 10, marginLeft: 15, marginRight: 15 }}>
              <View style={tw` h-36  flex flex-row bg-white m-2`} >
                <View style={tw`w-3/6 h-full  items-center`} >
                  <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: e.img_Url }}>
                  </ImageBackground>
                </View>
                <View style={tw`bg-white flex flex-row w-3/6 items-center`} >
                  <View style={tw`bg-transparent h-16 absolute inset-x-0 top-0 w-full items-center`}>
                    <View style={styles.view}>
                      <View style={styles.inview}>
                        <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>
                          <Text style={{ fontSize: 14, color: "black", textAlign: "center", fontWeight: 'bold' }}>{e.food_name}</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={{ height: 50, width: "50%", alignItems: "center", flexDirection: "row", backgroundColor: "transparent", marginTop: 16, marginLeft: 28 }}>
                    <Image style={tw`w-4 h-4 ml-3`} source={require("../../assets/Icons/coins.png")} />
                    <Text style={tw`pl-2`}>{e.price} TND</Text>
                  </View>
                  <View style={{ alignItems: "center", marginBottom: -112, marginLeft: -84, justifyContent: "center" }}>
                    <TouchableOpacity style={{ height: 32, width: 120, backgroundColor: "#36E08B", alignItems: "center", opacity: .7 }}
                      onPress={() => navigation.navigate("Healthy", {
                        rest_name: e.rest_name,
                        food_name: e.food_name,
                        rating: e.rating,
                        ingredients: e.ingredients,
                        price: e.price,
                        img_Url: e.img_Url,
                        supp: e.supp,
                        longitude: e.longitude,
                        latitude: e.latitude
                      })}>
                      <Text style={tw`mt-1  font-bold `}>See more</Text>

                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View style={{ top: 685, width: "100%", position: "absolute" }}>
        <Footer />
      </View>
    </View>


  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: "transparent",
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
