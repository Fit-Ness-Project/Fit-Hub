import { useState, useEffect, useRef } from "react";
import * as React from "react";
import * as Location from "expo-location";
import { Gym } from "./Gyminterface";
import axios from "axios";

import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
export default function TabOneScreen({ longi, latit, name }: any) {
  const [GymData, setGymData] = useState<Gym[]>([]);
  useEffect(() => {
    axios
      .get("http://192.168.11.161:5000/gyms")
      .then((response) => {
        console.log(response.data);
        setGymData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  const [location, setLocation] = useState({
    latitude: 36.880384,
    longitude: 36.880384,
    latitudeDelta: 0.0181,
    longitudeDelta: 0.0181,
  });
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let position = await Location.getCurrentPositionAsync({});
      const { longitude, latitude } = position.coords;
      setLocation({
        longitude,
        latitude,
        latitudeDelta: 0.0181,
        longitudeDelta: 0.0181,
      });
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const a = Number(longi);
  const b = Number(latit);

  return (
    location.longitude,
    location.latitude ? (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={location}
          provider="google"
          showsUserLocation
        >
          <Marker coordinate={{ latitude: b, longitude: a }}>
            <Callout>
              <Text>{name}</Text>
            </Callout>
          </Marker>

          <Circle center={location} radius={3000} />
        </MapView>
      </View>
    ) : (
      <ActivityIndicator style={{ flex: 1 }} animating size="large" />
    )
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "30%",
  },
});
