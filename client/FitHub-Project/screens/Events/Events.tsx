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

  const navigation = useNavigation();
  let flatListRef = useRef<FlatList<Event> | null>();

  const [eventhData, setEventData] = useState<Events[]>([]);

  useEffect(() => {
    axios
      .get("http://192.168.11.134:5000/events")

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
  //       <Image source={{ uri: item.imageurl }} style={styles.image} />
  //       <Text style={styles.title}> {item.eventName} </Text>
  //       <Text> {item.description} </Text>
  //       <Text > {item.adress} </Text>
  //       <Text style={{color:'grey'}}> Date : {item.date} </Text>

  //       <TouchableOpacity
  //        onPress ={()=>{}}
  //      >  
  //          <Text style={{backgroundColor:"#e7ff19"}}>Join This Event</Text>
  //         </TouchableOpacity>

  //     </View>
  //   );
  // };

  return (
    <ScrollView>
      {/* {eventhData.map((item, k) => ( */}

        <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
          <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/eventbg.png")}>
              <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                      <Text style={tw`text-white text-3xl pl-2 font-bold`}>Yoga</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>

        </View>
        <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
          <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/event.png")}>
              <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                      <Text style={tw`text-white text-3xl pl-2 font-bold`}>Zumba</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>

        </View>
      {/* ))} */}
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