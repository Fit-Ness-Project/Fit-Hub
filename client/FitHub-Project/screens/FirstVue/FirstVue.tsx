import * as React from 'react'
import { StyleSheet, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { useState, useCallback, useEffect } from "react"

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    const hints = [["Exercise Daily", "Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., but you should have some sort of moderate physical activity in your everyday life. If you're looking to shed a few pounds fast, do a higher-level intensity workout. For example, go on a walk at a brisk pace for an hour. Or, you can jog and set certain intervals to sprint during that hour. Make sure you're not in severe pain during your workout. Just a warning, your muscles will ache after a high intensity workout. It may be irritating, but that means your body is changing for the better. Be sure to stay hydrated, stretch, and eat foods with a decent amount of protein after each workout. The protein will help keep your muscles, not fat, rebuilding."],
    ["Stay Motivated", "An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you've always wanted."],
    ["Be Sure to Get Sleep", "Even though most of us have eight-hour jobs during the day or night, it is crucial to get enough sleep to recharge the body's batteries. Six to eight hours of sleep will keep the body going throughout the day, but if you happen to feel tired at any point after coming home from work, by all means take a small nap before exercising. You should only nap for about a half hour. This will prevent you from staying up later in the night."]]
    const [newName, setnewName]: any = useState(["Stay Motivated", "An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you've always wanted."]);
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * hints.length);
        setnewName(hints[index]);
    }, []);
    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    return (
        <View style={tw`h-full w-full bg-black`}>
            <ImageBackground style={tw`w-full h-full `} source={require("../../assets/images/back.jpg")}>
                <View style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}>
                    <View style={{ width: "100%", height: "65%", backgroundColor: "transparent" }}>
                    </View>
                    <View style={tw`bg-black opacity-80 `}>
                        <View style={tw`bg-transparent text-left items-center`}>
                            <Text style={{backgroundColor: "transparent",color:"white",alignItems:"center",marginLeft:"5%",fontSize:30,fontWeight:"500"}}> {newName[0]}  </Text >
                        </View>
                        {/* {tw`font-bold text-white bg-transparent text-3xl` */}
                        <View style={{ backgroundColor: "transparent", height: "25%", width: "90%", alignItems: "center",marginLeft:"5%"}}>
                            <Text style={tw`text-white `} >Stop wishing, Start doing, Join our community </Text>
                            <Text style={tw`text-white `} > and enjoy your healthy life.</Text>

                        </View>
                        <View style={tw`items-center bg-transparent`}>
                            <View style={tw`bg-transparent   flex-row `}>
                                <View style={tw` items-center  bg-transparent  `} >
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("signUp")} >
                                        <Text style={tw`text-center font-bold  text-black text-xl pt-3.5`} >REGISTER</Text></TouchableOpacity>
                                </View>
                                <View style={tw` items-center pl-4 bg-transparent`}>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")} >
                                        <Text style={tw`text-center   font-bold text-black text-xl pt-3.5`} >LOGIN</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

export default FirstVue

const styles = StyleSheet.create({

    button: {
        width: 150,
        height: 60,
        opacity: .8,
        fontWeight: "bold",
        backgroundColor: "#e7ff19",

    }
})
