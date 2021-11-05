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
import FoodCard from './FoodCard'
import EditScreenInfo from "../../components/EditScreenInfo";
import {
  Text,
  View
} from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function FoodRec() {
  let flatListRef = useRef<FlatList<FoodR> | null >();


  const [foodData, setFoodData] = useState<FoodR[]>([]);
  
  const [searchData, setSearchData] = useState<FoodR[]>([]);


  useEffect(() => {
    axios 
    .get('http://192.168.11.64:5000/recipes') 
     
    .then((response)=> {
       console.log(response.data)
        setFoodData(response.data)
        setSearchData(response.data)
    })
    .catch(( Error) => {
      console.log(Error);
    });

}, [])

const renderItems: React.FC<{item:FoodR}> = ({item})=> {
  return <TouchableOpacity onPress={()=> console.log(item)}
  activeOpacity={1} >
     <Image source={{uri: item.imageUrl}} style={styles.image}  />

     <View style={styles.footer} >
         <Text  style={styles.footerText}  >{item.recipeTitle} </Text>
         <Text  style={styles.footerText}  >{item.created_at} </Text>
     </View>
  </TouchableOpacity>
 }
 
 const ItemView: React.FC<{item:FoodR}> = ({item}) => {
     return (
         <Text>
             {item.recipeTitle.toUpperCase()}
         </Text>
     )
 }
 const ItemSeparatorView = () => {
     return (
         <View />
     )
 }
return (
  <View  style={styles.container}>
     <StatusBar   />
     <Text  style={styles.title} >  Food's program   </Text>
       
      <FlatList data={foodData}
       renderItem={renderItems} 
       keyExtractor={(item,i)=> i.toString()}
       showsHorizontalScrollIndicator={false}
      //  pagingEnabled 
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    image:{
      width: 350 ,
      height: 230 ,
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
    footerText:{
     color: '#fff' ,
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