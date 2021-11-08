import * as React from "react";
import { View, Text, TouchableOpacity } from "../../../../components/Themed";
import { Image, ScrollView, ImageBackground, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigator } from "../../../../navigation";


export default function ChangeView({ }) {
    const navigation = useNavigation()

    return (
        <><ScrollView>
            <View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/Gymf.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/Gym.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>GYMS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Coachs")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/coach.jpg")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/coach.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>COACH</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/food.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/Food.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>DIETS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/restoo.jpeg")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/resto.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>RESTAURANTS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Events")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/event.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/Event.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>EVENTS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={tw`h-52 p-2 bg-white pl-4 pr-4 `}>
                    <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../../assets/images/blogs.png")}>
                            <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`}>
                                <View style={styles.view}>
                                    <View style={styles.inview}>
                                        <Image style={tw` w-16 h-16  `} source={require("../../../../assets/Icons/Blog.png")} />
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-3xl pl-2 font-bold`}>BLOGS</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>


                {/* <View style={tw` h-52 p-2 bg-white pl-4 pr-4 `} >
        <TouchableOpacity onPress={() => navigation.navigate("Coachs")}>

            <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/coach.jpg")}>
                <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`} >
                    <View style={styles.view}>
                        <View style={styles.inview}>
                                <Image style={tw` w-full h-full  `} source={require("../../../../assets/Icons/coach.png")} />
                            </View>
                            <View style={tw`h-7 items-center bg-transparent pt-1 `}>
                 <View style={tw`h-7 w-7 bg-transparent`}>
                                <Text style={tw`text-black  pl-2 font-bold`} >COACH</Text>
                        </View>

                    </View>

                </View>
                            </View>
            </ImageBackground>
        </TouchableOpacity>

    </View>

    <View style={tw` h-52 p-2 bg-white pl-4 pr-4 `} >
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>


            <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/food.png")}>
                <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`} >

                    <View style={styles.view}>
                        <View style={styles.inview}>
                            <View style={tw`h-7 w-8 bg-transparent`}>
                                <View style={tw`h-7 w-7 bg-transparent`}>

                                    <Image style={tw` w-full h-full `} source={require("../../../../assets/Icons/Food.png")} />
                                </View>
                            </View>
                            <View style={tw`h-7 items-center bg-transparent pt-1 `}>
                                <Text style={tw`  text-black  pl-2 font-bold`} >DIETS</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </ImageBackground>
        </TouchableOpacity>

    </View>
    <View style={tw` h-52 p-2 bg-white pl-4 pr-4 `} >
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
            <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/restoo.jpeg")}>
                <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`} >

                    <View style={styles.view}>
                        <View style={styles.inview}>
                            <View style={tw`h-7 w-8 bg-transparent`}>
                                <View style={tw`h-7 w-8 bg-transparent`}>

                                    <Image style={tw` w-full h-full `} source={require("../../../../assets/Icons/resto.png")} />
                                </View>
                            </View>
                            <View style={tw`h-7 items-center bg-transparent pt-1 `}>
                                <Text style={tw`  text-black  pl-2 font-bold`} >RESTAURANTS</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ImageBackground>
        </TouchableOpacity>

    </View>
    <View style={tw` h-52 p-2 bg-white pl-4 pr-4 `} >
        <TouchableOpacity onPress={() => navigation.navigate("Events")}>

            <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/event.png")}>
                <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`} >

                    <View style={styles.view}>
                        <View style={styles.inview}>
                            <View style={tw`h-7 w-8 bg-transparent`}>

                                <Image style={tw` w-full h-full  `} source={require("../../../../assets/Icons/Event.png")} />
                            </View>
                            <View style={tw`h-7 items-center bg-transparent pt-1 `}>
                                <Text style={tw`  text-black  pl-2 font-bold`} >EVENTS</Text>
                            </View>

                        </View>
                    </View>

                </View>
            </ImageBackground>
        </TouchableOpacity>

    </View>
    <View style={tw` h-52 p-2 bg-white pl-4 pr-4 `} >
        <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>

            <ImageBackground style={tw`w-full h-full`} source={require("../../../../assets/images/blogs.png")}>
                <View style={tw`bg-transparent h-20 absolute inset-x-0 bottom-16  w-full`} >

                    <View style={styles.view}>
                        <View style={styles.inview}>
                            <View style={tw`h-7 w-7 bg-transparent`}>

                                <Image style={tw` w-full h-full  `} source={require("../../../../assets/Icons/Blog.png")} />
                            </View>
                            <View style={tw`h-7 items-center bg-transparent pt-1 `}>
                                <Text style={tw`  text-black  pl-2 font-bold`} >BLOGS</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    </View> */}

            </View>
        </ScrollView><View>
            </View></>
    
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 50,
        borderRadius: 5,
        height: 60,
        opacity: .9,
        fontWeight: "bold",
        backgroundColor: "#e7ff19",
        borderColor: "gray",

    },
    text: {
        fontSize: 28,
    },
    view: {
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 10,
        opacity: .7
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
