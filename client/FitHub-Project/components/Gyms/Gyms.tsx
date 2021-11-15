import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Gym } from "./Gyminterface";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Footer from "../../screens/Footer/Footer";



export default function Gyms() {
  const [GymData, setGymData] = useState<Gym[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("https://fithub-tn-app.herokuapp.com/gyms")

      .then((response) => {
        setGymData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center",  marginBottom: 50}}>
          {GymData.map((e, k) => (
            <View key={k} style={tw` w-full   bg-gray-200 `}>

              <View
              
                style={{width:"100%",marginTop:10,alignItems: "center"}}
              >
                <View style={{backgroundColor:"white",height:400,width: "90%"}}>
                <View style={{width:"93%",height:"60%",marginTop:10,alignItems: "center"}}> 
                <View style={{width:"100%",height:"100%",marginLeft:21}}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: e.imgUrl }}
                />
                </View>
                       </View> 
                       <View style={{paddingLeft:10,paddingTop:4}}>
                         <Text style={tw`font-bold text-lg`}>{e.gymName}</Text>
                       </View>
                       <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10}}>
                         <Image style = {tw`w-4 h-4 `} source = {require("../../assets/Icons/location-pin.png")}/>
                       <Text style={tw`text-black text-xs  w-full pl-2`} >{e.adress}</Text>               
                       </View>
                       <TouchableOpacity style={{ alignItems: "center", marginTop:35, backgroundColor: "#E7FF19", height:40,width:110, marginLeft: 200 }}
               onPress={() =>
                navigation.navigate("Gym", {
                  gymName: e.gymName,
                  imgUrl: e.imgUrl,
                  rating: e.rating,
                  description: e.description,
                  fields: e.fields,
                  price: e.price,
                  latitude: e.latitude,
                  longitude: e.longitude,
                  phoneNumber: e.phoneNumber,
                  adress: e.adress,
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
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  view: {
    backgroundColor: "#36e08b",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: 0.7,
  },
  inview: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
});
