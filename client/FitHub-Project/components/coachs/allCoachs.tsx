import { useEffect, useState, useRef } from 'react'
import { Rating } from 'react-native-elements';
import { Text, View } from '../Themed';
import * as React from 'react';
import { Coach } from "./interface";
import axios from "axios";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground
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



  return (


    < ScrollView >
      <View style={tw`bg-gray-100`}>
        {/* <TextInput
          style={styles.input}
          value={search}
          placeholder=" search your coach here..."
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        /> */}
        {coachData.map((item, k) => (



          <View style={tw` h-36 mt-2 flex flex-row bg-white`} key={k} >

            <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/restoo.jpeg")}>
                            <View style={tw`bg-transparent h-16 absolute inset-x-0 bottom-10  w-full`}>
                                <View style={styles.view}>
                                    
                                        <View style={tw`h-10 items-center bg-transparent pt-1 `}>
                                            <Text style={tw`text-black text-xl pl-2 font-bold`}>Salade Cesar</Text>
                                        </View>
                                   
                                </View>
                            </View>
                        </ImageBackground>
              {/* <Text> penne a la creme </Text> */}
            </View>
            <View style={tw`bg-white flex w-2/5 items-center`} >
             

              <Text style={tw`pl-6 mt-14 items-center`} >
                Calories things
              </Text>
              {/* <Text style={tw`pl-4  `}>
                {item.description}
              </Text> */}
              {/* <Text style={tw`pl-4`}>
           {item.adress}
          </Text> */}

              {/* <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={item.rating / 2}
                size={12}
                showRating={false}

              /> */}
{/* 
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
              </View> */}

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


