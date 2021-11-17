import * as React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Events } from "./interface";
import { FlatList, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { View, Text } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Footer from "../Footer/Footer";
import { AirbnbRating } from "react-native-ratings";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Event({ }: RootTabScreenProps<'createEvent'>) {
  let flatListRef = useRef<FlatList<Event> | null>();
  const [eventData, setEventData] = useState<Events[]>([]);
  useEffect(() => {
    axios
      .get('https://fithub-tn-app.herokuapp.com/events')
      .then((response) => {
        setEventData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  const navigation = useNavigation();
  return (
    <View  style={tw` h-full bg-gray-600 `}>
      <ScrollView style={tw`  bg-transparent `}>
        <View style={{ alignItems: "center",  marginBottom: 50}}>
          {eventData.map((e, k) => (
            <View key={k} style={tw` w-full h-80 bg-gray-200 `}>
              <View
                style={{margin:10,alignItems: "center"}}
              >
                <View style={{backgroundColor:"white",height:300,width: "90%"}}>
                <View style={{width:"95%",height:"60%",marginTop:10,alignItems: "center"}}>
                <View style={{width:"100%",height:"100%",marginLeft:21}}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: e.imageUrl }}
                />
                </View>
                       </View>
                       <View style={{paddingLeft:10,paddingTop:4}}>
                         <Text style={tw`font-bold text-lg`}>{e.eventName}</Text>
                       </View>
                       <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10}}>
                         <Image style = {tw`w-4 h-4 `} source = {require("../../assets/Icons/location-pin.png")}/>
                       <Text style={tw`text-black  w-full pl-2`} >{e.adress}</Text>              
                       </View>
                       <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#E7FF19", height:40,width:110, marginLeft: 180 }}
               onPress={() =>
                navigation.navigate("event",{
                  eventName: e.eventName,
                  adress: e.adress,
                  description: e.description,
                  date: e.date,
                  created_at : e.created_at,
                  max_number: e.max_number,
                  imageUrl : e.imageUrl
                })
              }>
              <Text style={tw` mt-1.5 font-bold text-lg `}>See More</Text>
            </TouchableOpacity>
                </View>
              </View>
              </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ top: 685, width: "100%", position: "absolute" }}>
        <Footer />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 50,
    borderRadius: 5,
    height: 60,
    opacity: .9,
    fontWeight: "bold",
    backgroundColor: "#E7FF19",
    borderColor: "gray",
  },
  text: {
    fontSize: 28,
  },
  view: {
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: .6
  },
  inview: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  holder: {
    marginTop: -5,
    height: "36%",
    backgroundColor: "transparent",
    borderRadius: 5,
    alignItems: "center"
  }
})