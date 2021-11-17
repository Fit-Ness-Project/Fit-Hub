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
import Footer from "../../screens/Footer/Footer";
import { Feather } from '@expo/vector-icons';
import { BottomNavigation } from 'react-native-paper';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function AllCoachs() {

  const navigation = useNavigation()


  const [coachData, setCoachData] = useState<Coach[]>([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios
      .get('https://fithub-tn-app.herokuapp.com/coachs')

      .then((response) => {

        setCoachData(response.data)
        //  console.log("coachs:",coachData)
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



  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });



  return (

    <View>
      < ScrollView style={{ marginBottom: 60 }}>
        <View style={tw`bg-gray-100  m-1 `}>
          <TextInput
            style={styles.input}
            value={search}
            placeholder="     search your coach here..."
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
          />
          <View style={{ backgroundColor: 'transparent', marginTop: 8, position: 'absolute', marginLeft: 345 }}>
            <Feather name="search" size={22} color="black" />
          </View>
          {coachData.map((item, k) => (



            <View style={tw` h-40 p-2 flex flex-row m-2`} key={k} >

              <View style={tw`bg-black w-2/5 h-full items-center`} >
                <Image style={tw` w-full h-full  items-center `} source={{ uri: item.imageUrl }} />

              </View>
              <View style={tw`bg-white flex  w-3/5 items-center`} >
                <Text style={tw`font-bold text-xl pl-4 mt-3 items-center`} >
                  {item.coachName}
                </Text>
                <Text style={{ marginTop: 1, marginLeft: 6, fontSize: 13 }}>
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
                        <Text style={tw` items-center font-bold text-base `}>see more</Text>
                        {/* <Image style={tw` h-6 w-6 items-center `} source={require("../../assets/Icons/seeMore.png")}
                      /> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ top: 685, width: "100%", position: "absolute" }}>

        <Footer />
      </View>
    </View>
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
    opacity: .7,
    marginLeft: 6

  },

  input: {
    width: "95%",
    height: 40,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginLeft: 14,
    marginRight: 14,
  },

})


