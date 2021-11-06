import * as React from 'react';
import { ScrollView ,StyleSheet ,Text,Image,  FlatList, View } from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
// import { RootTabScreenProps } from '../../types';
// // import {Gym} from "./Gyminterface"
// import axios from 'axios';
 import tw from "tailwind-react-native-classnames"
// import  { useEffect, useState , useRef } from 'react'

 

const viewConfigRef = {viewAreaCoveragePercentTreshold:95}

import { RouteProp } from '@react-navigation/native';

   const Gym: React.FC<{
        route: RouteProp<{
            params: {
               GymId: number,
               gymName: string,
               imgUrl: string,
               rating: number,
               description: string,
               fields: string,
               price: number 
            }
        }, 'params'>
    }> = ({ route: { params } }) => {
        return (
                 
        <View style = {tw` h-full  bg-gray-900`}>
            
      <Card style = {tw`bg-gray-400   rounded mt-1`}   >
          <View style = {tw`h-2/3`}>
<Card.Cover style = {tw ` h-full `} source={{ uri:params.imgUrl}}  />
</View>
    <Card.Content style ={tw``}>
    
      <Title style = {tw` text-white text-4xl`}> {params.gymName}</Title>    
       <Paragraph style = {tw`text-xl text-white pt-6`}>{params.description} </Paragraph>
       <Text style = {tw`text-xl pt-6 text-gray-900`}>{params.fields}</Text>
       <Text style = {tw`text-xl text-gray-900`}>{params.price} TND</Text>
       <Button style = {tw`text-2xl`} onPress={()=>{}} >JOIN US </Button>
    </Card.Content>
   
   </Card>
      </View>
   );
    }

    export default Gym






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "black"
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
  img:{
    width: 350,
    height:400, 
  }
});