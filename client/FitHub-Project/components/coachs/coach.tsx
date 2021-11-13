import { Text, View } from "../Themed";
import * as React from "react";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Image, Alert } from "react-native";

const Coach: React.FC<{
  route: RouteProp<
    {
      params: {
        coachId: number;
        coachName: string;
        rating: number;
        price: number;
        description: string;
        adress: string;
        phoneNumber: number;
        email: string;
        imageUrl: string;
      };
    },
    "params"
  >;
}> = ({ route: { params } }) => {
  const createThreeButtonAlert = () =>
    Alert.alert("Want to book your Coach ?", "Click OK!", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: params.imageUrl }} />
      <Text style={styles.title}>{params.coachName}</Text>
      <Text>{params.description}</Text>
      <Text>{params.price} TND</Text>
      <Text>{params.adress}</Text>
      <Text>{params.email}</Text>
      <View style={styles.button}>
        <Text onPress={createThreeButtonAlert}>BOOK</Text>
      </View>
    </View>
  );
};

export default Coach;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 480,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 6,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    height: 38,
    width: 198,
    alignItems: "center",
    backgroundColor: "#36e08b",
    justifyContent: "center",
  },
});
