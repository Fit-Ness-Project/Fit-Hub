import * as React from 'react';
import { ScrollView ,StyleSheet ,  FlatList,
  Image,
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  TextInput } from 'react-native';
import Map from "./Map"
import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {Gym} from "./Gyminterface"
import axios from 'axios';
import  { useEffect, useState , useRef } from 'react'
const viewConfigRef = {viewAreaCoveragePercentTreshold:95}
export default function Gyms() {

let flatListRef = useRef<FlatList<Gym> | null >();

// const [currentIndex, setCurrentIndex] = useState(0);

const [GymData, setGymData] = useState<Gym[]>([]);



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
    <ScrollView>
      {GymData.map((e,k)=>(

      <Card key = {k} >
    <Card.Cover source={{ uri: e.imgUrl }} />
    <Card.Content>
      <Title>{e.gymName}</Title>
      <Paragraph>{e.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button color = "blue">See More</Button>
      <Button color = "blue">Remove</Button>
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