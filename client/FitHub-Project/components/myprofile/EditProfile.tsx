import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/core';
const EditProfile = () => { 
    var navigation = useNavigation()
  
     function handelSubmit() {
      let id:{user_id : number}
      
      AsyncStorage.getItem('key').then((res: any) => {
          id = jwtDecode(res)
      }).then(res => {
         axios.patch(`https://fithub-tn-app.herokuapp.com/users/${id.user_id}`, {
            weight: weight,
            height: height,
            password:Password,
            phone_number:phone_number
         }).then(_ =>{
          navigation.navigate('Home');
         })
            .catch((err) => console.log({err}))
      })
        .catch((err) => console.log({ err }))
    }
  

  let [weight, setweight] = useState('0')
  let [height, setheight] = useState('0')
  let [Password, setPassword] = useState('')
  let [phone_number, setphone_number] = useState('0')
  let [first_name, setfirst_name] = useState('')

  return (
    <View style={tw`bg-gray-100 p-5 h-full`}>
      <View style={tw`bg-white w-full h-full`} >
        <View style={tw` mt-10  items-center `}>
          <View style={tw`m-2 w-72`}>
            <Text style={tw`font-bold text-black`}>Weight</Text>
            <TextInput
              style={styles.input}
              value={weight}

              underlineColorAndroid="transparent"
              onChangeText={setweight}
            />
          </View>
          <View style={tw`m-2 w-72`}>
            <Text style={tw`font-bold text-black`}>Height</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setheight}
            />
          </View>
          <View style={tw`m-2 w-72`}>
            <Text style={tw`font-bold text-black`}>Password</Text>
            <TextInput
              style={styles.input}
              value={Password}
              onChangeText={setPassword}
            />
          </View>
          <View style={tw`m-2 w-72`}>
            <Text style={tw`font-bold text-black`}>first name</Text>
            <TextInput
              style={styles.input}
              value={first_name}
              onChangeText={setfirst_name}
            />
          </View>
          <View style={tw`m-2 w-72`}>
            <Text style={tw`font-bold text-black`}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phone_number}
              onChangeText={setphone_number}
            />
          </View>
          <View style={tw`m-6`}>
            <TouchableOpacity style={{
              alignItems: "center",
              height: 40,
              width: 300,
              backgroundColor: "#E7FF19",
              opacity: 0.8,
              paddingTop: 8,
            }} onPress={handelSubmit}>
              <Text style={tw`font-bold text-black`}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  seeMore: {
    backgroundColor: "#36e08b",
    alignItems: "center",
    opacity: .7,
    marginLeft: 6

  },

  input: {
    width: "95%",
    height: 40,
    borderWidth: 1.5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginLeft: 14,
    marginRight: 14,
  },

})

export default EditProfile