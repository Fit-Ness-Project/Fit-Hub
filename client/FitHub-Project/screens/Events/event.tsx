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
    const [join, setjoin]: any = useState(false)
    const joinbut = [<TouchableOpacity onPress={() => { if (join === false) { setjoin(true) } else { setjoin(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/heart.png")} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => { if (join === false) { setjoin(true) } else { setjoin(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/love.png")} />
    </TouchableOpacity>
    ]
    const [data, setData]: any = useState([])
 
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
                                TITLE OF THE EVENT IS HERE
                            </Text>
                            <View>
                                {!join && (joinbut[1])}
                                {join && (joinbut[0])}
                            </View>
                            <Text style={{ paddingLeft: 20, fontSize: 17 }}>
                                LOCATION HERE
                            </Text>
                            <Text style={{ fontSize: 10, color: "gray", marginLeft: 20 }}> EVENT date here</Text>
                          
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
