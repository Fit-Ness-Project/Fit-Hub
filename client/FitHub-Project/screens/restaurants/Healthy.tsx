import * as React from 'react';
import { ScrollView, StyleSheet, Text, Image, FlatList, View, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import tw from "tailwind-react-native-classnames"

import { AirbnbRating } from "react-native-ratings";
import Footer from "../Footer/Footer";


const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 }

import { RouteProp } from '@react-navigation/native';

const Healthy: React.FC<{
    route: RouteProp<{
        params: {
            rest_name: string;
            food_name: string;
            rating: number;
            ingredients: string;
            price: number;
            img_Url: string;
            supp: string;
            longitude: string;
            latitude: string;
        }
    }, 'params'>
}> = ({ route: { params } }) => {
    return (

        <View>
        <ScrollView style={tw`bg-gray-100 `}>
          <View style={{ alignItems: "center", marginTop: 10, marginBottom: 50 }}>
            <View
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: "white",
                alignItems: "center",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <ImageBackground
                style={{ width: "100%", height: 400 }}
                source={{uri:params.img_Url}}
              ></ImageBackground>
              <View style={tw`mt-4`}>
              <Text style={tw`text-2xl font-bold `}>Chez {params.rest_name}</Text>
                <Text style={tw`text-xl font-bold `}>
                  -{params.food_name}
                </Text>
               
              </View>
      
     
             
              <View style={tw`ml-6 mr-6 mt-3`}>
                <Text style={tw`font-bold`}>Ingredients:</Text>
            { params.ingredients.split(",").map((e,k)=>{
              return(
                <Text key = {k} style={tw`text-base mt-1`}>
               {e}
              </Text>
            )})}
              </View>
              <View style={tw`ml-6 mr-6 mt-3`}>
                <Text style={tw`font-bold`}>Methods:</Text>
                <Text style={tw`text-base mt-1`}>
                  1- Heat oven to 220C/200C fan/gas 7. Pat chips dry on kitchen
                  paper, then lay in a single layer on a large baking tray.
                  Drizzle with half the olive oil and season with salt. Cook for
                  40 mins, turning after 20 mins, so they cook evenly.
                </Text>
                <Text style={tw`text-base`}>
                  2- Mix the breadcrumbs with the lemon zest and parsley, then
                  season well. Top the cod evenly with the breadcrumb mixture,
                  then drizzle .0with the remaining oil. Put in a roasting tin
                  with the cherry tomatoes, then bake in the oven for the final 10
                  mins of the chips’ cooking time.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </View>
      </View>

    );
}

export default Healthy



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: Dimensions.get('screen').width - 20,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 100,
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'row'

    },
    navigation: { flex: 2, backgroundColor: 'red' },
    image: {

        height: 230,
        alignItems: 'center',
        resizeMode: 'cover',
        marginVertical: 10,
    },
    body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
    footer: { flex: 1, backgroundColor: 'cyan' }
})

