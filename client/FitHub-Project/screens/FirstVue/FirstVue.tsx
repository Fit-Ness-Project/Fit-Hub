import * as React from 'react'
import { StyleSheet , Button,ImageBackground,TouchableOpacity } from 'react-native'
import {Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    return (
        <View style ={tw`h-full w-full bg-black`}>
<ImageBackground style={tw`w-full h-full `} source={require("../../assets/images/back.jpg")}> 
<View style = {{width : "100%" , height :"100%" , backgroundColor :"transparent"}}>
<View style = {{width : "100%" , height : "60%",backgroundColor :"transparent"}}>

</View>
<View  style = {tw` items-center bg-transparent  `} >
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("signUp")} > 
<Text style = {tw`text-center font-bold  text-black text-2xl pt-3.5`} >REGISTER</Text></TouchableOpacity>
</View>
<View  style = {tw`mt-2 items-center  bg-transparent`}>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")} > 
<Text style = {tw`text-center   font-bold text-black text-2xl pt-3.5`} >LOGIN</Text></TouchableOpacity>
</View>
{/* <Button  onPress={() => navigation.navigate("login")} title="logIn" />            */}
</View>
</ImageBackground>
</View>
      
    )
}

export default FirstVue

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 285,
        borderRadius : 5,
        height: 60, 
        opacity: .8,
        fontWeight : "bold",
        backgroundColor : "#e7ff19",
        borderColor : "gray",

    }
})
