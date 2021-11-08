import * as React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Events } from "./interface";
import { FlatList,  StyleSheet,TouchableOpacity,Image, Button} from "react-native";
import { View, Text } from "../../components/Themed";
const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 };
import { RootTabScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/core";


export default function Event({}: RootTabScreenProps<'createEvent'>) {

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

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };
  const renderItems: React.FC<{ item: Events }> = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={{ uri: item.imageurl }} style={styles.image} />
        <Text> {item.eventName} </Text>
        <Text> {item.description} </Text>
        <Text> {item.adress} </Text>
        <Text> {item.date} </Text>
        <TouchableOpacity
         onPress ={()=>{}}
        >
          <Text>Join</Text>
          </TouchableOpacity>
    
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={eventhData}
        renderItem={renderItems}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        //  ref={(ref)=>{flatListRef.current = ref}}
        viewabilityConfig={viewConfigRef}
      />
      
      {/* <Text>Create Event</Text>
      <TouchableOpacity
        style={styles.button}
       onPress={() => navigation.navigate("createEvent")} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 230,
    resizeMode: "cover",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 50,
    alignItems: "center",
    backgroundColor: "#000",
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  carousel: {
    maxHeight: 700,
  },
  dotview: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 50,
  },
  title: {
    color: "white",

    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "#e7ff19",
    alignItems: "center",
    padding: 10,
    opacity: .8

}
});
