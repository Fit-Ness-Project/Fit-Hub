import * as React from 'react'
import { StyleSheet, Button, ScrollView, ImageBackground } from 'react-native'
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    return (
        <ScrollView>

            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/gymView2.png")}>
                </ImageBackground>

            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/coach.png")}>
                </ImageBackground>

            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/resto.png")}>
                </ImageBackground>

            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/events.png")}>
                </ImageBackground>
            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
            <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/blogs.png")}>
                </ImageBackground>

            </View>


        </ScrollView>
    )
}

export default FirstVue

const styles = StyleSheet.create({})
