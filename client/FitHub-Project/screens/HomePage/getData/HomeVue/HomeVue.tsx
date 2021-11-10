import * as React from "react";
import { useState, useEffect} from 'react';

import { View, Text, TouchableOpacity,} from "../../../../components/Themed";
import { Image, ScrollView, ImageBackground, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigator } from "../../../../navigation";
import axios from 'axios'

export default function ChangeView({ }) {
    const navigation = useNavigation()
    const [like, setLike]: any = useState(false)
    const likebut = [ <TouchableOpacity  onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} > 
        <Image style={tw` w-8 h-8 ml-80  `} source={require("../../../../assets/Icons/heart.png")} />
        </TouchableOpacity>,
     <TouchableOpacity onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} >
     <Image style={tw` w-8 h-8 ml-80  `} source={require("../../../../assets/Icons/love.png")} />
     </TouchableOpacity>
    ]
    const [data,setData]:any=useState([])
    useEffect(() => {
        axios
          .get("http://192.168.11.161:5000/blogs")
    
          .then((response) => {
            setData(response.data);
          })
          .catch((Error) => {
            console.log(Error);
          });
      }, []);
    return (
        <ScrollView>
            <View style={{ padding: 10, backgroundColor: "" }}>
                <View style={{ backgroundColor: "white", height: "100%" }}>
                    <View style={{ backgroundColor: "red", height: 280 }}>
<ImageBackground  source={require("../../../../assets/images/blog4.png")}> </ImageBackground> 
                    </View>
                    <View>
                        <Text style={{ padding: 15, fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
                            TITLE OF THE BLOG IS HERE
                        </Text>
                        <View>
                 {!like && (likebut[1])}
                 {like && (likebut[0])}
                           


                        </View>
                        <Text style={{ paddingLeft: 20, fontSize: 17 }}>
                            Author Name
                        </Text>
                        <Text style={{ fontSize: 10, color: "gray", marginLeft: 20 }}> created at 99/99/9999</Text>
                        <Text style={{ padding: 20 }}>
                            Living a healthier life might seem like a tall order — the nutrition, the exercise, the inner happiness! But having some friendly advice at your disposal, whenever and wherever you need it, makes it easier and more fun. With just a click, these awesome blogs filled with tips, tricks, and personal stories will inspire you on your journey to wellness.
                            Living a healthier life might seem like a tall order — the nutrition, the exercise, the inner happiness! But having some friendly advice at your disposal, whenever and wherever you need it, makes it easier and more fun. With just a click, these awesome blogs filled with tips, tricks, and personal stories will inspire you on your journey to wellness.
                            Living a healthier life might seem like a tall order — the nutrition, the exercise, the inner happiness! But having some friendly advice at your disposal, whenever and wherever you need it, makes it easier and more fun. With just a click, these awesome blogs filled with tips, tricks, and personal stories will inspire you on your journey to wellness.


                        </Text>


                    </View>
                </View>
            </View>
            {/* <View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/gym.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/weight.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>GYMS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Coachs")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/coach3.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/coach.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>COACHS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/diets3.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/diet.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>DIETS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/resto3.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/resto.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>RESTAURANTS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Events")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/events3.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/event.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>EVENTS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/blog5.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/blog.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-white text-3xl pl-2 font-bold`}>BLOGS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

            </View> */}

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 50,
        borderRadius: 5,
        height: 60,
        opacity: 0.9,
        fontWeight: "bold",
        backgroundColor: "#e7ff19",
        borderColor: "gray",
    },
    text: {
        fontSize: 28,
    },
    view: {
        backgroundColor: "black",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 10,
        opacity: 0.7,
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
        alignItems: "center",
    },
});
