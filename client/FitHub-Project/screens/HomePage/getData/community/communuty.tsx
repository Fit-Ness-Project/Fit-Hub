import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../../../components/EditScreenInfo";
// import { Text,TextInput,View} from "../../../../components/Themed";
import tw from 'tailwind-react-native-classnames';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Community() {
  return (
    <View style ={tw`bg-gray-400`}>

    <View style ={tw`h-24 bg-white`}>
      {/* <Image style={}
      
      ></Image> */}
     <TextInput style={tw`border-2 border-gray-400 rounded-2xl w-2/3 ml-20 mt-5 h-10`} />

     
    </View>
     <View style ={tw`h-80 mt-1 bg-white`}>

     </View>
     <View style ={tw`h-80 mt-1 bg-white`}>

</View>
</View>
  );
}
