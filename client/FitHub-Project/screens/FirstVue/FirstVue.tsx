import { useEffect, useState, useCallback } from 'react'
import * as React from 'react'
import { StyleSheet, Button, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { borderRadius } from '@mui/system';
const FirstVue = () => {


    return (
        <ScrollView>

            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/gymView2.png")}>
                    <View style={tw`bg-transparent h-8 absolute inset-x-0 bottom-0`} >

                        <View style={styles.view}>
                            <View style={styles.inview}>
                                <Image style={tw` w-10 h-10  `} source={require("../../assets/Icons/gym.png")} />
                                <Text style={tw`text-black  pl-2  `} >GYMS</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>

            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >

                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/coach.png")}>
                    <View style={tw`bg-transparent h-8 absolute inset-x-0 bottom-0`} >

                        <View style={styles.view}>
                            <View style={styles.inview}>
                                <View style={tw`h-7 w-7 bg-transparent`}>

                                    <Image style={tw` w-full h-full  `} source={require("../../assets/Icons/coach.png")} />
                                </View>
                                <Text style={tw`text-black  pl-2  `} >COACH</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>

            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/resto.png")}>
                    <View style={tw`bg-transparent h-8 absolute inset-x-0 bottom-0`} >

                        <View style={styles.view}>
                            <View style={styles.inview}>
                                <View style={tw`h-7 w-8 bg-transparent`}>
                                    <View style={tw`h-7 w-8 bg-transparent`}>

                                        <Image style={tw` w-full h-full `} source={require("../../assets/Icons/resto.png")} />
                                    </View>
                                </View>
                                <Text style={tw`  text-black  pl-2  `} >RESTAURANTS</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/events.png")}>
                    <View style={tw`bg-transparent h-8 absolute inset-x-0 bottom-0`} >

                        <View style={styles.view}>
                            <View style={styles.inview}>
                                <View style={tw`h-7 w-8 bg-transparent`}>

                                    <Image style={tw` w-full h-full  `} source={require("../../assets/Icons/event.png")} />
                                </View>
                                <Text style={tw`  text-black  pl-2  `} >EVENTS</Text>
                            </View>
                        </View>

                    </View>            </ImageBackground>
            </View>
            <View style={tw`mt-5 h-36 bg-red-200 rounded-xl`} >
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/blogs.png")}>
                    <View style={tw`bg-transparent h-8 absolute inset-x-0 bottom-0`} >

                        <View style={styles.view}>
                            <View style={styles.inview}>
                                <View style={tw`h-7 w-7 bg-transparent`}>

                                    <Image style={tw` w-full h-full  `} source={require("../../assets/Icons/blog.png")} />
                                </View>
                                <Text style={tw`  text-black  pl-2  `} >BLOGS</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>

            </View>


        </ScrollView>
    )
}

export default FirstVue

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 150,
        borderRadius: 5,
        height: 60,
        opacity: .8,
        fontWeight: "bold",
        backgroundColor: "#e7ff19",
        borderColor: "gray",

    },
    text: {
        fontSize: 28,
    },
    view: {
        backgroundColor: "#e7ff19",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 10,
        opacity: .6
    },
    inview: {
        backgroundColor: "transparent",
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
    },
    holder: {
        marginTop: -5,
        height: "36%",
        backgroundColor: "transparent",
        borderRadius: 5,
        alignItems: "center"
    }

})
