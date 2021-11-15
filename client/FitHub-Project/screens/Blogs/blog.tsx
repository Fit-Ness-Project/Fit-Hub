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

const blog: React.FC<{
    route: RouteProp<
      {
        params: {
            blogTitle: string;
  imageUrl: string;
  content: string;
  like: number;
  author: string;
  date : any;
        };
      },
      "params"
    >;
    
  }> = ({ route: { params } }) => {

    const [like, setLike]: any = useState(false)
    const likebut = [<TouchableOpacity onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/heart.png")} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => { if (like === false) { setLike(true) } else { setLike(false) } }} >
        <Image style={{ width: 30, height: 30, left: 290 }} source={require("../../assets/Icons/love.png")} />
    </TouchableOpacity>
    ]
    

    return (
        <View>
            <ScrollView>
                <View style={{ padding: 10, backgroundColor: "" }}>
                    <View style={{ backgroundColor: "white", height: "100%" }}>
                        <View style={{ backgroundColor: "red", height: 280 }}>
                            <Image style={{ width: "100%", height: "100%" }} source={{uri:params.imageUrl}} />
                        </View>
                        <View>
                            <Text style={{ padding: 15, fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
                                {params.blogTitle}
                            </Text>
                            <View>
                                {!like && (likebut[1])}
                                {like && (likebut[0])}
                            </View>
                            <Text style={{ paddingLeft: 20, fontSize: 17 }}>
                               {params.author}
                            </Text>
                            <Text style={{ fontSize: 10, color: "gray", marginLeft: 20 }}> {Date()}</Text>
                            <Text style={{ padding: 20 }}>
                              {params.content}
                            </Text>


                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 685, width: "100%" }}>
                <Footer />
            </View>
        </View>
    )
}

export default blog;