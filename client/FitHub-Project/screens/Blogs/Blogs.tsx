import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, TextInput } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useEffect, useState, useRef } from 'react'
import { Rating } from 'react-native-elements';
import axios from "axios";
import {
   StatusBar,
   StyleSheet,
   FlatList,
   Image,
   Dimensions,
   Animated,
   Platform,
   ImageBackground
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Blog } from "./interface";


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
      
      const renderItems: React.FC<{ item: Blog}> = ({ item }) => {

         return <TouchableOpacity onPress={() => navigation.navigate("blog", {
            id: item.id,
            blogTitle: item.blogTitle, 
            imageUrl: item.imageUrl,
            content: item.content,
            date: item.date,
            comment: item.comment,
            comment_count: item.comment_count,
            like: item.like
         })} >

           <ImageBackground source={{ uri: item.imageUrl }} style={styles.image}    >
           <Text style={styles.title} >{item.blogTitle} </Text>
           </ImageBackground>
         
         </TouchableOpacity>
       }
     





   return (
  <View style={styles.container}>
     {/* <ImageBackground  source="../../assets/images/coachbg.png" > */}
         <FlatList
         data={blogData}
         renderItem={renderItems}
         keyExtractor={(item, i) => i.toString()}
       
         showsHorizontalScrollIndicator={false}
         
         ref={(ref) => { flatListRef.current = ref }}
        
         viewabilityConfig={viewConfigRef} />
          {/* </ImageBackground> */}
         </View>
   )
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: "column"
   },
   image: {
     // flex: 2,
     alignItems: 'center',
     justifyContent: 'center',
     width: 350,
     height: 230,
     resizeMode: 'cover',
     marginVertical: 10,
     borderRadius: 16,
   },
   title: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: "black",
      opacity:0.7,
    }
})
