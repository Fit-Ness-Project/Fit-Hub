import { useEffect, useState, useRef } from 'react'
import { Rating } from 'react-native-elements';
import { Text, View } from '../Themed';
import * as React from 'react';
import { Coach } from "./interface";
import axios from "axios";
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  ImageBackground,
  TextInput
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import tw from "tailwind-react-native-classnames";



const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 }

export default function AllCoachs() {

  const navigation = useNavigation()

  let flatListRef = useRef<FlatList<Coach> | null>();

  const [coachData, setCoachData] = useState<Coach[]>([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios
      .get('http://192.168.11.65:5000/coachs')

      .then((response) => {

        setCoachData(response.data)
        //  console.log(response.data)
      })
      .catch((Error) => {
        console.log(Error);
      });


  },

    [])

  const searchFilter = (text: string) => {
    if (text) {
      const newData = coachData.filter((item) => {
        const itemData = item.coachName ? item.coachName.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setCoachData(newData)
      setSearch(text)
    }
  }

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index })
  }



  const renderItems: React.FC<{ item: Coach }> = ({ item }) => {

    return <TouchableOpacity onPress={() => navigation.navigate("coach", {
      coachId: item.id,
      coachName: item.coachName,
      rating: item.rating,
      price: item.price,
      description: item.description,
      adress: item.adress,
      phoneNumber: item.phoneNumber,
      email: item.email,
      imageUrl: item.imageUrl
    })}

      activeOpacity={1} >
      <ImageBackground source={{ uri: item.imageUrl }} style={styles.image} >
        <Rating imageSize={25} readonly startingValue={item.rating / 2} style={styles.rating} />
      </ImageBackground>
      <View style={styles.footer} >
        <Text style={styles.footerText}>{item.coachName} </Text>
        <Text style={styles.footerText}>{item.price} TND</Text>

      </View>
    </TouchableOpacity>
  }


  return (

    <View style={tw`bg-red-200 h-32 `} >
    <TextInput
        style={styles.input}
        value={search}
        placeholder=" search your coach here..."
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
      />


      {/* <FlatList data={coachData}
        renderItem={renderItems}
        keyExtractor={(item, i) => i.toString()}

        showsHorizontalScrollIndicator={false}

        ref={(ref) => { flatListRef.current = ref }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}

      /> */}

      {/* 
      <View style={styles.dotview}>
        {coachData.map(({ }, index: number) => (
          <TouchableOpacity key={index.toString()}
            onPress={() => scrollToIndex(index)}
          >

          </TouchableOpacity>
        ))}
      </View> */}


        <View style={tw`bg-black w-40 h-full items-center`} >
          <Image style={tw` w-full h-full  items-center `} source={require("../../assets/images/logo.png")} />

        </View>
        <View style={tw`bg-green-200 -mt-32 ml-40 h-24 `} >
          <Text style={tw`font-bold text-xl pl-4 items-center`} >
            Mohamed Salah
          </Text>
          <Text style={tw`pl-4  `}>
            metkharej ml ineps
          </Text>
          <Text style={tw`pl-4`}>
            box, fitness
          </Text>
        </View>
        <View style={tw`bg-white ml-40 h-8`}>

        </View>
      </View>

      )
}



      const styles = StyleSheet.create({
     
      image: {

        height: 230,
  },
      footer: {
        // borderWidth: 1,
        // height: 60,
        // opacity: .8,
        // fontWeight: "bold",
        // backgroundColor: "#e7ff19",

      },
      footerText: {
        // color: 'black',
        // fontSize: 18,
        // fontWeight: 'bold',
      },
      carousel: {
        maxHeight: 590
  },
      dotview: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // marginVertical: 20,
      },
      circle: {
        // width: 10,
        // height: 10,
        // backgroundColor: "grey",
        // borderRadius: 50,
      },
      title: {
        // color: 'white',
        // fontSize: 25,
        // fontWeight: 'bold',
        // backgroundColor: "black"
      },
      itemStyle: {
        // padding: 10
      },
      input: {
        // width: 350,
        // height: 55,
        // borderWidth: 1,
        // margin: 2,
        // borderColor: 'black',
        // backgroundColor: "white",
        // borderRadius: 6,
      },
      rating: {
        // position: 'absolute',
        // left: 5,
        // top: 5,
      }
})
