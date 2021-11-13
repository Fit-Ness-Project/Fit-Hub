import * as React from 'react';
import {StyleSheet , View ,ImageBackground } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
// import { RootTabScreenProps } from '../../types';
// // import {Gym} from "./Gyminterface"
// import axios from 'axios';
 import tw from "tailwind-react-native-classnames"
// import  { useEffect, useState , useRef } from 'react'

export default function FirstView() {

  
    
      return (
<View style ={tw`h-full w-full opacity-60 bg-black`}>
<ImageBackground style={tw`w-full h-full `} source={require("../../assets/images/girlbg.jpg")}> 

</ImageBackground>
</View>

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