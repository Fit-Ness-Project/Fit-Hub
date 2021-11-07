import * as React from 'react';
import {StyleSheet,Text,View,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
  import tw from "tailwind-react-native-classnames"
import {Gym} from "./Gyminterface"
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
export default function Gyms() {
const [GymData, setGymData] = useState<Gym[]>([]);
const navigation = useNavigation()
useEffect(() => {
  axios 
  .get('http://192.168.11.161:5000/gyms')
   
  .then((response)=> {
     console.log(response.data)
      setGymData(response.data)
  })
  .catch(( Error) => {
    console.log(Error);
  });

}, [])
return (
  <ScrollView style={{backgroundColor:"black"}}>

{GymData.map((e,k)=>(
     
      <Card style = {{ width:"100%",backgroundColor:'rgba(236, 236, 236, 1)', marginTop:6}}  key = {k} >
     
       <Card.Cover  source={{ uri: e.imgUrl }} />

          <Card.Content>
   <View style = {{flexDirection:"row" , backgroundColor :"transparent",alignItems: "center"}}>
     <Image style= {tw`h-6 w-6  mt-1`} source ={require("../../assets/Icons/test.png")}/>
      <Text style = {tw`text-black text-lg font-bold`}>  {e.gymName}</Text>
      </View>
      </Card.Content>
      <View style = {{width:"100%"}}>
      <Text style = {tw`text-black text-sm ml-4 mt-3`}>{e.description}</Text>
      </View>
      <View style = {{height:30}}></View>
      <View style = {{alignItems:"center"}}>
      <TouchableOpacity  onPress={() => navigation.navigate('Gymdescription' , {
   GymId: e.id,
   gymName: e.gymName,
   imgUrl: e.imgUrl,
   rating: e.rating,
   description: e.description,
   fields: e.fields,
   price: e.price 
})} style={{backgroundColor:"#e7ff19",height:35,width:"100%",alignItems:"center",opacity:.7}} ><Image style={tw`h-8 w-8`} source = {require("../../assets/Icons/expand-button.png")}/></TouchableOpacity>
  </View>
  </Card>


      ))}


</ScrollView>
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
   