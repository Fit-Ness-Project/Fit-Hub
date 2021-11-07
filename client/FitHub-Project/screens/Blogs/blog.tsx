import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../../components/Themed';
import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    TextInput,
    Button,
    Alert
} from "react-native";

const Blog: React.FC<{
    route: RouteProp<{
        params: {
            id: number;
            blogTitle: string; 
            imageUrl: string; 
            content: string;
            date: Date;
            comment: string;
            comment_count: Number; 
            like: Number;
        }
    }, 'params'>
}> = ({ route: { params } }) => {

    return (
        <View style={styles.container}>
<Text style={styles.title}>{params.blogTitle}</Text>
<ImageBackground source={{ uri: params.imageUrl }} style={styles.image} >
</ImageBackground>
<Text  style={styles.date}>{params.date}</Text>
<Text style={styles.text} >{params.content}</Text>
        </View>
    )

}



export default Blog



const styles = StyleSheet.create({
    container: {
        // flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: "column"
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 430,
        resizeMode: 'cover',
        marginVertical: 10,
        borderRadius: 6,
    },
    title: {
        alignItems: 'center',
        fontSize:32,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
    },
    date:{
        fontSize:15
    }
})
