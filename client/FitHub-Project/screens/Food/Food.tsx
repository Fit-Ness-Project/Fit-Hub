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
         created_at: item.created_at 
  }) }
  activeOpacity={1} >
    <View style={styles.container}>
<View style={{ display: 'flex',flexDirection: 'col', flex: 8, padding: 10, justifyContent: 'center'}}>
     <Image source={{ uri:item.imageUrl}} style={{ width: 100,flex:'col',height: 100, borderRadius: 20, backgroundColor: '#EAEAEA'}} /> 
      </View>
     <View style={{display: 'flex', flex: 10, padding: 10, justifyContent:'space-around', alignItems: 'center',color: 'black', fontSize: 25 ,
      fontWeight: 'bold', 
      }} >
         <Text  style={styles.titleT}  >{item.recipeTitle} </Text>
         <Text  style={styles.footerText}  >{item.created_at.slice(0,10)}  </Text>
         <Text  style={styles.footerText}  >{item.likes} Likes </Text>
    
     </View>
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
  // container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
     
  //   },
  container: {     
    display: 'flex',
    flex: 1, 
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "black",
    height: 100,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row'
},
    image:{
      width: 'full' ,
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
      flex:'col',
      fontSize: 25 ,
      fontWeight: 'bold', 
      backgroundColor: "black"
    }

})