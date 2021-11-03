import  { useState , useEffect } from 'react';
import * as React from "react"
import * as Location from 'expo-location';

// import { View } from '../components/Themed';
// import MapView from 'react-native-maps';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
const initialState = {
  latitude : 37.78825, 
  longitude : -122.4324,
  latitudeDelta :0.0922, 
  longitudeDelta : 0.0421
}
export default function TabOneScreen() {
  const [location, setLocation] = useState({
    latitude : null, 
    longitude : null,
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const {longitude , latitude} = location.coords
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
    
    <Marker coordinate = {location}
      pinColor = "black">
      
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