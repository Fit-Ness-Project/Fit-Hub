import * as React from 'react';
import { ScrollView ,StyleSheet ,  FlatList } from 'react-native';
  import tw from "tailwind-react-native-classnames"
import Map from "./Map"
import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {Gym} from "./Gyminterface"
import axios from 'axios';
import  { useEffect, useState , useRef } from 'react'
import { useNavigation } from '@react-navigation/core';


const viewConfigRef = {viewAreaCoveragePercentTreshold:95}
export default function Gyms() {

let flatListRef = useRef<FlatList<Gym> | null >();

// const [currentIndex, setCurrentIndex] = useState(0);

const [GymData, setGymData] = useState<Gym[]>([]);

const navigation = useNavigation()

useEffect(() => {
  axios 
  .get('http://192.168.11.161:5000/gyms')
   
  .then((response)=> {
    //  console.log(response.data)
      setGymData(response.data)
  })
  .catch(( Error) => {
    console.log(Error);
  });

}, [])

  return (
    <ScrollView style = {tw  `bg-white`}>
      {GymData.map((e,k)=>(

      <Card style = {tw`bg-gray-500 w-96 ml-4 rounded mt-1`}  key = {k} >
    <Card.Cover  source={{ uri: e.imgUrl }} />
    <Card.Content>
      <Title style = {tw`text-white`}>  {e.gymName}</Title>
      <Paragraph style = {tw`text-white`}>{e.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button  onPress={() => navigation.navigate('Gymdescription' , {
         GymId: e.id,
         gymName: e.gymName,
         imgUrl: e.imgUrl,
         rating: e.rating,
         description: e.description,
         fields: e.fields,
         price: e.price 
      })} color = "#e7ff19">See More</Button>
      <Button onPress = {()=>console.log(e)} color = "#e7ff19">Show in Maps</Button>
    </Card.Actions>
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