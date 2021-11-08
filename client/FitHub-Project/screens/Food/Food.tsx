import * as React from "react";
import  { useEffect, useState , useRef } from 'react'
import {FoodR} from "./interface";
import axios from "axios";
import { StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  TextInput
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";
import { useNavigation } from '@react-navigation/core';

const screenWidth = Dimensions.get('screen').width;

export default function Food() {
  let flatListRef = useRef<FlatList<FoodR> | null >();

  const [foodData, setFoodData] = useState<FoodR[]>([]);
  const [searchData, setSearchData] = useState<FoodR[]>([]);
  const  navigation  = useNavigation()

  useEffect(() => {
    axios 
    .get('http://192.168.11.64:5000/recipes') 
     
    .then((response)=> {
       console.log(response.data)
        setFoodData(response.data)
        setSearchData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

}, [])

  const renderItems: React.FC<{item:FoodR}> = ({item})=> {
  return <TouchableOpacity  onPress={()=> navigation.navigate('Recipe',{
         recipeId: item.id,
         recipeTitle: item.recipeTitle,
         imageUrl: item.imageUrl,
         likes: item.likes,
         content: item.content,
         comments: item.comments, 
  }) }
  activeOpacity={1} >
    <View style={styles.container}>
     <View style={{ display: 'flex',flexDirection: 'row', flex: 8, padding: 10, justifyContent: 'center',backgroundColor:'#EEEDE7'}}>
     <Image source={{ uri:item.imageUrl}} style={{ width :100,flexDirection:'row',height: 85, borderRadius: 20, backgroundColor: '#EEEDE7'}} /> 
     
     <View style={{display: 'flex', flex: 10, padding: 10, justifyContent:'space-around', alignItems: 'center',backgroundColor:'#EEEDE7'
      }} >
         <Text  style={styles.titleT}  >{item.recipeTitle} </Text>
         {/* <Text >{item.comments}  </Text> */}
         <Text >{item.likes} Likes </Text>
     </View>
     </View>
     </View>
  </TouchableOpacity>
 }
 
return (
  <View  style={styles.container}>
     <StatusBar   />
      <FlatList data={foodData}
       renderItem={renderItems} 
       keyExtractor={(item,i)=> i.toString()}
       showsHorizontalScrollIndicator={false}
   
/>
        <View style= {styles.dotview}>
            {foodData.map(({},index:number)=> (
                <TouchableOpacity key={index.toString()}  >
                </TouchableOpacity>
            ))}
        </View>
     </View>
)
}


const styles = StyleSheet.create({
  container: {     
    display: 'flex',
    flex: 1, 
    // width: Dimensions.get('screen').width - 30,
    margin: 10,
    borderRadius: 20,
    height: 100,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
},
    image:{
     
      height: 230 ,
      alignItems : 'center',
      resizeMode: 'cover' ,
      marginVertical : 10 ,
    },
    footer:{
      flexDirection : 'row',
      justifyContent: 'space-between',
      height: 100 ,
      paddingHorizontal: 50,
      alignItems : 'center',
      backgroundColor: '#000' ,
    },
    titleT:{
     color: 'black' ,
     fontSize: 18 ,
     fontWeight: 'bold',
    },
    carousel:{
        maxHeight: 300
    },
    dotview:{
      flexDirection : 'row',
      justifyContent: 'center',
      marginVertical : 20 ,
    },
    circle:{
        width:10,
        height:10,
        backgroundColor: "grey",
        borderRadius: 50,
    },
    title:{
      color: 'white',
      fontSize: 25 ,
      fontWeight: 'bold', 
      backgroundColor: "black"
    }

})