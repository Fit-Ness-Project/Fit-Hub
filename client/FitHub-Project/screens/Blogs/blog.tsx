import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../../components/Themed';
import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import axios from 'axios'
import Footer from "../../screens/Footer/Footer";

export default function blog({ }) {

    const [like, setLike]: any = useState(false)
    const likebut = [<TouchableOpacity onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/heart.png")} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/love.png")} />
    </TouchableOpacity>
    ]
    const [data, setData]: any = useState([])
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
        <View>
            <ScrollView>
                <View style={{ padding: 10, backgroundColor: "" }}>
                    <View style={{ backgroundColor: "white", height: "100%" }}>
                        <View style={{ backgroundColor: "red", height: 280 }}>
                            <Image style={{ width: "100%", height: "100%" }} source={require("../../assets/images/blog4.png")} />
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
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, width: "100%" }}>
                <Footer />
            </View>
        </View>
    )
}

