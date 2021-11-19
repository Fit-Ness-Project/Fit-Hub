import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import tw from "tailwind-react-native-classnames"

export default function Information({ }: RootTabScreenProps<'Home'>) {
   const [selectedValue, setSelectedValue] = useState("male");
   const navigation = useNavigation();

   function handelSubmit() {
      let id: { user_id: number }

      AsyncStorage.getItem('key').then((res: any) => {
         id = jwtDecode(res)
      }).then(res => {
         axios.patch(`https://fithub-tn-app.herokuapp.com/users/${id.user_id}`, {
            age: ages,
            weight: weights,
            height: heights

         }).then((res) => {
            navigation.navigate('Home')
         })
            .catch((err) => console.log({ err }))
      })
   }
   let [weights, setweight] = useState("");
   let [heights, setheight] = useState("");
   let [ages, setage] = useState("");
   // let [bmis, setbmi] = useState(0);



   return (
      <View style={styles.container}>
         <View style={tw`bg-white w-full  h-full`}>
            <Text style={styles.title}>Add Your Informations</Text>
            <View style={tw`flex-row m-9`}>
               <Text style={styles.label}>Age :</Text>
               <TextInput style={[styles.input, tw`ml-10`]}
                  underlineColorAndroid="transparent"
                  placeholder="Age (year)"
                  autoCapitalize="none"
                  value={ages}
                  onChangeText={setage}
               />

            </View>
            <View style={tw`flex-row m-9`}>
               <Text style={styles.label}>Height :</Text>
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Height (Cm)"
                  autoCapitalize="none"
                  value={heights}
                  onChangeText={setheight}
               />
            </View>
            <View style={tw`flex-row m-9`}>
               <Text style={styles.label}>Weight :</Text>
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Weight (Kg)"
                  autoCapitalize="none"
                  value={weights}
                  onChangeText={setweight}
               />
            </View>
            <View style={tw`flex-row m-9`}>
               <Text style={styles.label}>Select your gender :</Text>
               <View style={[tw` w-20 h-8 opacity-80 rounded ml-6`, { backgroundColor: '#36e08b' }]}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ marginLeft: 10, fontWeight: "800", height: 30, width: 150, backgroundColor: '#e7ff19' }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item
                        label="MALE" value="male" />
                     <Picker.Item
                        label="FEMALE" value="Female" />
                  </Picker>
               </View>
            </View>
            <TouchableOpacity
               onPress={() => { handelSubmit(), navigation.navigate("Home") }}
               style={styles.submitButton}
            >
               <Text style={[styles.submitButtonText, tw`font-bold`]}> Next </Text>
            </TouchableOpacity>
            <Text style={styles.resultText}></Text>
            < Text style={styles.resultText}></Text>
            < Text style={styles.resultText}></Text>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      padding: 20

   },
   input: {
      width: "30%",
      height: 25,
      borderWidth: 1.5,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black',
      marginLeft: 14,
      marginRight: 14,
   },
   submitButton: {
      backgroundColor: '#e7ff19',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      textAlign: "center",
      color: 'black',
      // fontWeight:"bold",
      fontSize: 18,

   },
   output: {
      textAlign: "center",
      fontSize: 30,
   },
   title: {
      paddingTop: 30,
      paddingBottom: 10,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
   },
   resultText: {
      paddingTop: 20,
      paddingBottom: 10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label: {
      marginLeft: 15,
      fontSize: 20
   }
})
