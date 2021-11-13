import { Text, View } from "../Themed";
import * as React from "react";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Image, Alert, Linking, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames"
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
      { text: "OK", onPress: () =>Linking.openURL('https://api.konnect.network/APgPg9HrG') },
    ]);

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
      <Image style={styles.image} source={{ uri: params.imageUrl }} />
      </View>
      <View style={{alignItems: "center"}}>
      <Text style={styles.title}>{params.coachName}</Text>
      </View>
      <View style={tw`flex-row p-2`}> 
      <Image style={tw`w-4 h-4`} source = {require("../../assets/Icons/sports.png")}/>
      <Text style={tw`pl-2`}>{params.description}</Text>
      </View>
      <View style={tw`flex-row p-2`}> 
      <Image style={tw`w-4 h-4`} source = {require("../../assets/Icons/profit.png")}/>
      <Text style={tw`pl-2 text-base`}>{params.price} <Text style = {{fontSize:9,fontWeight:"500",}}>TND</Text></Text>
      </View>
      <View style={tw`flex-row p-2`}> 
      <Image style={tw`w-4 h-4`} source = {require("../../assets/Icons/map-pin.png")}/>
      <Text style={tw`pl-2`}>{params.adress}</Text>
      </View>
      <View style={tw`flex-row p-2`}> 
      <Image style={tw`w-4 h-4`} source = {require("../../assets/Icons/email.png")}/>
      <Text style={tw`pl-2`}>{params.email}</Text>
      </View>
        <TouchableOpacity  onPress={createThreeButtonAlert} >
      <View style={styles.button}>
        <Text>BOOK</Text>
      </View>
        </TouchableOpacity>
    </View>
  );
};

export default Coach;

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    position: "relative",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 380,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 6,
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    height: 38,
    width: "95%",
    margin:8,
    alignItems: "center",
    backgroundColor: "#36e08b",
    justifyContent: "center",
  },
});



