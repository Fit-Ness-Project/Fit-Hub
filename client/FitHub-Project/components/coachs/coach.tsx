import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../Themed';
import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    TextInput,
    Button,
    Alert
} from "react-native";

const Coach: React.FC<{
    route: RouteProp<{
        params: {
            coachId: number, coachName: string, rating: number,
            price: number,
            description: string,
            adress: string,
            phoneNumber: number,
            email: string,
            imageUrl: string
        }
    }, 'params'>
}> = ({ route: { params } }) => {

    const bc = "https://img3.goodfon.com/wallpaper/nbig/7/a8/fitness-model-gym-sport.jpg"

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Want to book your Coach ?",
    "Click OK!",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

    return (
        <View style={styles.container}>

 
            <Image style={styles.image} source={{ uri: params.imageUrl }} />
            <Text style={styles.title}>


                {params.coachName}

            </Text>
            <Text>
                {params.description}
            </Text>
            <Text>{params.price} TND</Text>
            <Text>{params.adress}</Text>
            <Text>{params.email}</Text>
            <Button onPress={createThreeButtonAlert} title="book" />
         
        </View>
    )

}

export default Coach


const styles = StyleSheet.create({
    container: {
        flex: 4,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 430,
        resizeMode: 'cover',
        marginVertical: 10,
        borderRadius: 6,
    },
    title: {

        fontSize: 25,
        fontWeight: 'bold',

    },
})