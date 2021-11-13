import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, TextInput } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useEffect, useState, useRef } from 'react'
import { Rating } from 'react-native-elements';
import axios from "axios";
import {
   StyleSheet,
   FlatList,
   ScrollView,
   ImageBackground
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Blog } from "./interface";
import tw from "tailwind-react-native-classnames";
import Footer from "../../screens/Footer/Footer";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 }


export default function Blogs() {
   const navigation = useNavigation()

   // let flatListRef = useRef<FlatList<Blog> | null>();
   // const [blogData, setBlogData] = useState<Blog[]>([]);

   // useEffect(() => {
   //    axios
   //       .get('http://192.168.11.65:5000/blogs')
   //       .then((response) => {
   //          setBlogData(response.data)
   //          // console.log(response.data)
   //       })
   //       .catch((Error) => {
   //          console.log(Error);
   //       });
   // },
   //    [])

   // const renderItems: React.FC<{ item: Blog }> = ({ item }) => {

   //    return <TouchableOpacity onPress={() => navigation.navigate("blog", {
   //       id: item.id,
   //       blogTitle: item.blogTitle,
   //       imageUrl: item.imageUrl,
   //       content: item.content,
   //       date: item.date,
   //       comment: item.comment,
   //       comment_count: item.comment_count,
   //       like: item.like
   //    })} >

   //       <ImageBackground source={{ uri: item.imageUrl }} style={styles.image}    >
   //          <Text style={styles.title} >{item.blogTitle} </Text>
   //       </ImageBackground>

   //    </TouchableOpacity>
   // }



   return (

      <View style={tw` items-center bg-gray-100`}>
      < ScrollView >

        <View style={{ marginBottom: 10, height: 400, marginTop: 10 }}>
          <View style={tw` h-72 flex flex-col mr-4 ml-4 rounded`} >
            <View style={tw`w-80 mt-4 h-5/6 items-center`} >
              <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/blog4.png")}>
              </ImageBackground>
            </View>
            <View style={tw` mt-2 ml-2`}>
              <Text style={tw` text-lg font-bold `}>
                BLOG TITLE
              </Text>
              <View style={tw` flex flex-row`}>
                <Text style={tw`ml-1 `}>
                  By Author
                </Text>
              </View>
            </View>


            <View style={tw` flex flex-row ml-2`}>
              <MaterialIcons name="date-range" size={20} color="black" />
              <Text style={tw`text-black ml-1  `}>
               created at 99/99/9999
              </Text>
            </View>


            <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#e7ff19", height: 46, width: 120, marginLeft: 200 }}
              onPress={() => navigation.navigate("Event")}>
              <Text style={tw` mt-2 font-bold text-lg `}>See More</Text>
            </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: -48, width: "100%" }}>
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
