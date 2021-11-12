import * as React from "react";
import { useEffect, useState, useRef } from 'react'
import { RestaurantR } from "./interface";
import axios from "axios";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
 ScrollView,ImageBackground
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";
import { useNavigation } from '@react-navigation/core';
import tw from "tailwind-react-native-classnames";
import Footer from "../Footer/Footer";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const screenWidth = Dimensions.get('screen').width;

export default function Restaurant() {
  let flatListRef = useRef<FlatList<RestaurantR> | null>();

  const [foodData, setFoodData] = useState<RestaurantR[]>([]);
  const [searchData, setSearchData] = useState<RestaurantR[]>([]);
  const navigation = useNavigation()

  useEffect(() => {
    axios
      .get('http://192.168.11.64:5000/restaurants')

      .then((response) => {
        console.log(response.data)
        setFoodData(response.data)
        setSearchData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  // const renderItems: React.FC<{ item: RestaurantR }> = ({ item }) => {
  //   return <TouchableOpacity onPress={() => navigation.navigate('Healthy', {
  //     id: item.id,
  //     food_name: item.food_name,
  //     rest_name: item.rest_name,
  //     img_Url: item.img_Url,
  //     price: item.price,
  //     ingredients: item.ingredients,
  //     rating: item.rating,
  //     supp: item.supp,
  //   })}
  //     activeOpacity={1} >
  //     <View style={styles.container}>
  //       <View style={{ display: 'flex', flexDirection: 'row', flex: 8, padding: 10, justifyContent: 'center', borderRadius: 20, backgroundColor: '#EEEDE7' }}>
  //         <Image source={{ uri: item.img_Url }} style={{ width: 100, flexDirection: 'row', height: 85, borderRadius: 20, backgroundColor: '#EEEDE7' }} />

  //         <View style={{
  //           display: 'flex', flex: 10, padding: 10, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#EEEDE7'
  //         }} >
  //           <Text style={styles.titleT}  >{item.food_name} </Text>
  //           {/* <Text >Chez {item.rest_name}  </Text> */}
  //           {/* <Text >{item.rating} /10 </Text> */}
  //           <Image style={tw` w-6 h-6 `} source={require("../../assets/Icons/like.png")} />
  //           <Text style={styles.titleM} >{item.price} DT </Text>
  //         </View>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // }

  return (
    //   <View  style={styles.container}>
    //      <StatusBar   />
    //       <FlatList data={foodData}
    //        renderItem={renderItems} 
    //        keyExtractor={(item,i)=> i.toString()}
    //        showsHorizontalScrollIndicator={false}

    // />
    //         <View style= {styles.dotview}>
    //             {foodData.map(({},index:number)=> (
    //                 <TouchableOpacity key={index.toString()}  >
    //                 </TouchableOpacity>
    //             ))}
    //         </View>
    //      </View>
    <View>
      < ScrollView >
        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 60 }}>

          <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
            <View style={tw`w-3/6 h-full  items-center`} >
              <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/dish1.jpg")}>
              </ImageBackground>
            </View>
            <View style={tw`bg-white flex flex-row w-3/6 items-center`} >
              <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0 w-full items-center`}>
                <View style={styles.view}>
                  <View style={styles.inview}>
                    {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                    <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>
                      <Text style={{ fontSize: 11, color: "white", textAlign: "center", }}>Barbecued broccoli, cauliflower & halloumi</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ height: 50, width: "20%", flexDirection: "row",backgroundColor: "transparent",marginTop:36,marginLeft:28}}>
              <MaterialIcons name="attach-money" size={20} color="black" />
                <Text style={{ fontSize: 16,width:150,marginLeft:12}}>12.5 TND</Text>
              </View>
              <View style={{alignItems: "center",marginBottom:-112,marginLeft:-28}}>
              <TouchableOpacity style={{ height: 32, width: 120,backgroundColor:"#36E08B",alignItems:"center",opacity:.7}}>
                      <Text style={tw ` text-base `}>See more</Text>
                      </TouchableOpacity>
                      </View>
              {/* <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" ,alignItems: "center",marginLeft:-56,backgroundColor: "transparent"}}>

                <View style={{ height: "100%", width: "30%", bottom: 0, borderWidth: 1, borderColor: "#gray" }}>
                  <View style={{ backgroundColor: "#e7ff19", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>Kcal</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14 }}>492</Text>
                </View>

                <View style={{ height: "100%", width: "30%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                  <View style={{ backgroundColor: "#e7ff19", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>fat</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14 }}>31g</Text>
                </View>

                <View style={{ height: "100%", width: "30%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                  <View style={{ backgroundColor: "#e7ff19", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "black" }}>carbs</Text>
                  </View>
                  <Text style={{ textAlign: "center", fontSize: 14 }}>14g</Text>
                </View>
              </View> */}


            </View>
          </View>
        </View>

      </ScrollView>
      {/*     
  <View style={{ position: 'absolute', bottom: 0, width: "100%" }}>
    <Footer />
  </View> */}
    </View>


  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: .7
  }, inview: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },

})