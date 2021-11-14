import * as React from "react";
// import EditScreenInfo from '../../components/EditScreenInfo';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useEffect, useState, useRef } from "react";
import { Rating } from "react-native-elements";
import axios from "axios";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Blog } from "./interface";
import tw from "tailwind-react-native-classnames";
import Footer from "../../screens/Footer/Footer";
import moment from 'moment';

const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 };

export default function Blogs() {
  const navigation = useNavigation();

  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get("https://fithub-tn-app.herokuapp.com/blogs")
      .then((response) => {
        setBlogData(response.data);
        console.log("data:", blogData);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center",  marginBottom: 50}}>
          {blogData.map((e, k) => (
            <View key={k} style={tw` w-full h-80  bg-gray-200 `}>

              <View
              
                style={{width:"100%",marginTop:10,alignItems: "center"}}
              >
                <View style={{backgroundColor:"white",height:300,width: "90%"}}>
                <View style={{width:"93%",height:"60%",marginTop:10,alignItems: "center"}}> 
                <View style={{width:"100%",height:"100%",marginLeft:21}}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: e.imageUrl }}
                />
                </View>
                       </View> 
                       <View style={{paddingLeft:10,paddingTop:4}}>
                         <Text style={tw`font-bold text-lg`}>{e.blogTitle}</Text>
                       </View>
                       <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10}}>
                         {/* <Image style = {tw`w-4 h-4 `} source = {require("../../assets/Icons/pin.png")}/> */}
                       <Text style={tw`text-black  w-full pl-2`} >{ moment(e.date, "YYYYMMDD").fromNow()}</Text>               
                       </View>
                       <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#E7FF19", height:40,width:110, marginLeft: 200 }}
               onPress={() =>
                navigation.navigate("blog",{ 
                  blogTitle: e.blogTitle,
                  imageUrl: e.imageUrl,
                  content: e.content,
                  like: e.like,
                  author: e.author,
                  date:e.date
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
  view: {
    backgroundColor: "black",
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
