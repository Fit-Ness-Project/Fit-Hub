import  { useState , useEffect } from 'react';
import * as React from "react"
import * as Location from 'expo-location';

// import { View } from '../components/Themed';
// import MapView from 'react-native-maps';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';


export default function TabOneScreen() {
  const [location, setLocation] = useState({
    latitude : 36.880384, 
    longitude : 36.880384,
    latitudeDelta: 0,
longitudeDelta: 0
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let position = await Location.getCurrentPositionAsync({});
      const {longitude , latitude} = position.coords
      setLocation({ 
        longitude,
        latitude,
         latitudeDelta :0.0922, 
        longitudeDelta : 0.0421
      });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return location.latitude ? (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion = {location} 
          provider = "google" showsUserLocation>
    
    <Marker coordinate = {location}>
      
        <Callout>
          <Text>I'm Here.</Text>
        </Callout>
      
      </Marker> 
    
    <Circle center = {location} radius = {3000}/>
      
      </MapView>
    </View>
  ) : <ActivityIndicator style = {{flex :1}} animating size = "large" />
}
  const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   map: {
     flex : 1 ,
     width: Dimensions.get('window').width,
     height:"30%",
   },
 });