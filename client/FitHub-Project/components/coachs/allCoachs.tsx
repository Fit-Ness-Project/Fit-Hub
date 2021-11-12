import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../Themed';
import * as React from 'react';
import { Coach } from "./interface";
import axios from "axios";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from "react-native-ratings";




export default function AllCoachs() {

const navigation = useNavigation()


  const [coachData, setCoachData] = useState<Coach[]>([]);
  const [search, setSearch] = useState('');


  useEffect(() => { 
    axios
      .get('http://192.168.11.104:5000/coachs')

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



  return (


    < ScrollView>
      <View style={tw`bg-gray-100 items-center`}>
        <TextInput
          style={styles.input}
          value={search}
          placeholder=" search your coach here..."
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        {coachData.map((item, k) => (



          <View style={tw` h-40 p-2 flex flex-row`} key={k} >

            <View style={tw`bg-black w-2/5 h-full items-center`} >
              <Image style={tw` w-full h-full  items-center `} source={{ uri: item.imageUrl }} />

            </View>
            <View style={tw`bg-white flex  w-3/5 items-center`} >
              <Text style={tw`font-bold text-xl pl-4 mt-4 items-center`} >
                {item.coachName}
              </Text>
              <Text style={tw`pl-4  `}>
                {item.description}
              </Text>
              {/* <Text style={tw`pl-4`}>
           {item.adress}
          </Text> */}
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={item.rating / 2}
                size={12}
                showRating={false}

              />

              <View style={tw`absolute inset-x-0 bottom-0`}>
                <TouchableOpacity onPress={() => navigation.navigate("coach", {
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
                >
                  <View style={styles.seeMore}>

                    <View style={tw`h-8 w-full bg-transparent items-center `}>

                      <Image style={tw` h-8 w-8 items-center `} source={require("../../assets/Icons/seeMore.png")}
                      />

                    </View>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>


        ))}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  seeMore: {
    backgroundColor: "#36e08b",
    alignItems: "center",


  },
 
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    margin: 6,
    borderColor: 'black',
    backgroundColor: "white",
  },
 
})


