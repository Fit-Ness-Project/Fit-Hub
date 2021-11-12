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

const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 }


export default function Blogs() {
   const navigation = useNavigation()

   let flatListRef = useRef<FlatList<Blog> | null>();
   const [blogData, setBlogData] = useState<Blog[]>([]);

   useEffect(() => {
      axios
         .get('http://192.168.11.65:5000/blogs')
         .then((response) => {
            setBlogData(response.data)
            // console.log(response.data)
         })
         .catch((Error) => {
            console.log(Error);
         });
   },
      [])

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

      <View>

         <ScrollView >
            <View style={{ alignItems: "center", marginTop: 10, marginBottom: 60 }}>
               <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
                  <View style={tw`w-3/6 h-full  items-center`} >
                     <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/blog4.png")}>
                     </ImageBackground>
                  </View>
                  <View style={tw`bg-white flex w-3/6 items-center`} >
                     <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0 w-full`}>
                        <View style={styles.view}>
                           <View style={styles.inview}>
                              {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                              <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>
                                 <Text style={{ fontSize: 11, color: "white", textAlign: "center", }}>TITLE OF THE BLOG</Text>
                              </View>
                           </View>
                        </View>
                     </View>
                     <View style={{ backgroundColor: "transparent", position: 'absolute', top: 60 }}>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>

         <View style={{ position: 'absolute', bottom: 0, width: "100%" }}>
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
