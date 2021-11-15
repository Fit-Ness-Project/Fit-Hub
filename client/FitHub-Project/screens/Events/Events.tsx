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

  // const scrollToIndex = (index: number) => {
  //   flatListRef.current?.scrollToIndex({ animated: true, index: index });
  // };
  // const renderItems: React.FC<{ item: Events }> = ({ item }) => {
  //   return (
  //     <View style={{ alignItems: "center" }}>
  //       <Image source={{ uri: item.imageurl }} />
  //       <Text > {item.eventName} </Text>
  //       <Text> {item.description} </Text>
  //       <Text > {item.adress} </Text>
  //       <Text style={{ color: 'grey' }}> Date : {item.date} </Text>

  //       <TouchableOpacity
  //         onPress={() => { }}
  //       >
  //         <Text style={{ backgroundColor: "#e7ff19" }}>Join This Event</Text>
  //       </TouchableOpacity>

  //     </View>
  //   );
  // };
  const navigation = useNavigation();
  return (
    <View style={tw` items-center bg-gray-100`}>
      < ScrollView style={{ marginBottom: 60 }}>
        {eventData.map((item,k)=>(

       
        <View style={{ marginBottom: 10, height: 400, marginTop: 10 }} key={k}>
          <View style={tw` h-72 flex flex-col mr-4 ml-4 rounded`} >
            <View style={tw`w-80 mt-4 h-5/6 items-center`} >
              <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: item.imageUrl }}>
              </ImageBackground>
            </View>
            <View style={tw` mt-2 ml-2`}>
              <Text style={tw` text-lg font-bold `}>
              {item.eventName}
              </Text>
              <View style={tw` flex flex-row`}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text style={tw` `}>
                {item.adress}
                </Text>
              </View>
            </View>
            <View style={tw` flex flex-row ml-3`}>
              <MaterialIcons name="date-range" size={20} color="black" />
              <Text style={tw`text-black ml-3  `}>
              {item.date}
              </Text>
            </View>

            <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#e7ff19",height: 46, width: 120, marginLeft: 200 }}
            >
              <Text style={tw` mt-2 font-bold text-lg `}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>
         ))}
      </ScrollView>
      <View style={{ top: 685, width: "100%",position: "absolute"}}>
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
    backgroundColor: "#e7ff19",
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