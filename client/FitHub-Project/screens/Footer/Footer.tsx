import * as React from "react";
import { View, TouchableOpacity } from "../../components/Themed";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const  ChangeView = ({}) =>{
    const navigation = useNavigation()
    return (
        <View style={tw `flex flex-row h-12 bg-gray-300 rounded`}>
                <TouchableOpacity
                style={tw `w-10 bg-transparent ml-8 mt-1`}
            onPress={() => {
              navigation.navigate("ProfileInfo");
            }}
          >
            <View style={tw `bg-transparent `}>
            <Ionicons name="person-circle" size={35} color="black"/>
            </View>
            </TouchableOpacity >
            <TouchableOpacity
                style={tw `w-10 bg-transparent ml-24 mt-1`}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View style={tw `items-center bg-transparent`}>
            <FontAwesome5 name="home" size={35} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={tw `w-10 bg-transparent ml-24 mt-1`}
            onPress={() => {
              navigation.navigate("NotFound");
            }}
          >
            <View style={tw `items-center bg-transparent`}>
            <Ionicons name="people" size={35} color="black" />
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default ChangeView