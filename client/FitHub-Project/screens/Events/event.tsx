import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../../components/Themed';
import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import axios from 'axios'
import Footer from "../../screens/Footer/Footer";
import tw from "tailwind-react-native-classnames"


const event: React.FC<{
    route: RouteProp<
        {
            params: {
                eventName: string;
                adress: string;
                description: string;
                date: Date;
                created_at: Date;
                max_number: number;
                imageUrl: string
            };
        },
        "params"
    >;

}> = ({ route: { params } }) => {
    const [join, setjoin]: any = useState(false)
    const joinbut = [<TouchableOpacity onPress={() => { if (join === false) { setjoin(true) } else { setjoin(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/heart.png")} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => { if (join === false) { setjoin(true) } else { setjoin(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/love.png")} />
    </TouchableOpacity>
    ]
    const [data, setData]: any = useState([])
    const createTwoButtonAlert = () =>
        Alert.alert("Confirm your Join Request ?", "Click OK!", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            { text: "OK", onPress: () => Alert.alert("Join request accepted") },
        ]);


    return (
        <View style={[{ height: "100%" }, tw`bg-gray-100`]}>
            <ScrollView>
                <View style={{ alignItems: "center", margin: 12, height: "100%" }}>
                    <View style={{ backgroundColor: "white", height: "100%" }}>
                        <View style={{ backgroundColor: "red", height: 280, width: 330 }}>
                            <Image style={{ width: "100%", height: "100%" }} source={{ uri: params.imageUrl }} />
                        </View>
                        <View>
                            <Text style={{ padding: 15, fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
                                {params.eventName}
                            </Text>
                            <View>
                                {!join && (joinbut[1])}
                                {join && (joinbut[0])}
                            </View>
                            <Text style={{ paddingLeft: 20, fontSize: 17 }}>
                                {params.adress}
                            </Text>
                            <Text style={{ fontSize: 10, color: "gray", marginLeft: 20 }}> {params.created_at}</Text>

                        </View>
                        <View>
                            <Text style={tw`text-black m-4`}>
                                {params.description}
                            </Text>
                        </View>
                        
     
                        <TouchableOpacity onPress={createTwoButtonAlert} style={{ alignItems: "center", backgroundColor: "#E7FF19", height: 40, width: 110, marginLeft: 200, margin: 6 }}>
                            <Text style={tw` mt-1.5 font-bold text-lg `}>JOIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ top: 685, width: "100%", position: "absolute" }}>
                <Footer />
            </View>
        </View>
    )
}
export default event