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


export default function Event({ }: RootTabScreenProps<'createEvent'>) {

  let flatListRef = useRef<FlatList<Event> | null>();

  const [eventhData, setEventData] = useState<Events[]>([]);
console.log(eventhData)
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


  return (
    <ScrollView>
      {eventhData.map((item, k) => (
        <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `} key={k}>
          <TouchableOpacity >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={{uri : item.imageUrl}}>
              <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                      <Text style={tw`text-white text-3xl pl-2 font-bold`}>{item.eventName}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          </View>
       ))} 
    </ScrollView>
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