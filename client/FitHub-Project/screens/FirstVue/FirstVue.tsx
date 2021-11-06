import * as React from 'react'
import { StyleSheet , Button,ImageBackground } from 'react-native'
import {Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    return (
        <View style ={tw`h-full w-full opacity-60 bg-black`}>
<ImageBackground style={tw`w-full h-full `} source={require("../../assets/images/girlbg.jpg")}> 

<Button onPress={() => navigation.navigate("signUp")} title="signUp" />
<Button onPress={() => navigation.navigate("login")} title="logIn" />           
</ImageBackground>
</View>
      
    )
}

export default FirstVue

const styles = StyleSheet.create({})
