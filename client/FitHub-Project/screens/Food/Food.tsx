import * as React from "react";
import { useEffect, useState, useRef } from 'react'
import { FoodR } from "./interface";
import axios from "axios";
import {
  StyleSheet,
  Dimensions,
  ImageBackground, ScrollView
} from "react-native";
import {
  Text,
  View
} from "../../components/Themed";
import { useNavigation } from '@react-navigation/core';
import tw from "tailwind-react-native-classnames";
import { AirbnbRating } from "react-native-ratings";

const screenWidth = Dimensions.get('screen').width;

export default function Food() {

  return (

    < ScrollView >
      <View style={tw`bg-gray-100 p-3`}>

        {/* {coachData.map((item, k) => ( */}



        <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
          <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/dish1.jpg")}>
            </ImageBackground>
          </View>
          <View style={tw`bg-white flex w-3/6 items-center`} >
            <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0 w-full`}>
              <View style={styles.view}>
                <View style={styles.inview}>
                  {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                  <View style={{ flex: 1, padding: 1, backgroundColor: "transparent" }}>

                    <Text style={{ fontSize: 11, color: "white", textAlign: "center", }}>Barbecued broccoli, cauliflower & halloumi</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: "transparent", position: 'absolute', top: 60 }}>
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={100 / 2}
                size={12}
                showRating={false}
              />
            </View>

            <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" }}>

              <View style={{ height: "100%", width: "30%", bottom: 0, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "#36E08Bblack", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>Kcal</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>492</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "#36E08B", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>fat</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>31g</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "#36E08B", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>carbs</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>14g</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
          <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/dish2.jpg")}>
            </ImageBackground>
          </View>
          <View style={tw`bg-white flex w-3/6 items-center`} >
            <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0  w-full`}>
              <View style={styles.view}>
                <View style={styles.inview}>
                  {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                  <View style={{ flex: 1, padding: 2, backgroundColor: "transparent" }}>

                    <Text style={{ fontSize: 14, color: "white", textAlign: "center", }}>Oven-baked fish & chips</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: "transparent", position: 'absolute', top: 60 }}>
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={200 / 2}
                size={12}
                showRating={false}
              />
            </View>
            <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" }}>

              <View style={{ height: "100%", width: "30%", bottom: 0, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>Kcal</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>492</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>fat</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>31g</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>carbs</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>14g</Text>

              </View>
            </View>
          </View>
        </View>
        <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
          <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/dish3.jpg")}>
            </ImageBackground>
          </View>
          <View style={tw`bg-white flex w-3/6 items-center`} >
            <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0  w-full`}>
              <View style={styles.view}>
                <View style={styles.inview}>
                  {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                  <View style={{ flex: 1, padding: 2, backgroundColor: "transparent" }}>

                    <Text style={{ fontSize: 14, color: "white", textAlign: "center", }}>Roasted teriyaki veg bowl</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: "transparent", position: 'absolute', top: 60 }}>
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={200 / 2}
                size={12}
                showRating={false}
              />
            </View>
            <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" }}>

              <View style={{ height: "100%", width: "30%", bottom: 0, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>Kcal</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>492</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>fat</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>31g</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>carbs</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>14g</Text>

              </View>
            </View>
          </View>
        </View>










        <View style={tw` h-36 mt-2 flex flex-row bg-white`} >
          <View style={tw`w-3/6 h-full  items-center`} >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/images/dish3.jpg")}>
            </ImageBackground>
          </View>
          <View style={tw`bg-white flex w-3/6 items-center`} >
            <View style={tw`bg-transparent h-12 absolute inset-x-0 top-0  w-full`}>
              <View style={styles.view}>
                <View style={styles.inview}>
                  {/* <View style={tw`h-4 items-center bg-transparent pt-1 `}> */}
                  <View style={{ flex: 1, padding: 2, backgroundColor: "transparent" }}>

                    <Text style={{ fontSize: 14, color: "white", textAlign: "center", }}>Roasted teriyaki veg bowl</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: "transparent", position: 'absolute', top: 50 }}>
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={200 / 2}
                size={12}
                showRating={false}
              />
            </View>
            <View style={{ position: 'absolute', bottom: 2, width: "95%", height: "35%" }}>

              <View style={{ height: "100%", width: "30%", bottom: 0, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>Kcal</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>492</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 61, bottom: 50, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>fat</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>31g</Text>
              </View>

              <View style={{ height: "100%", width: "30%", left: 124, bottom: 100, borderWidth: 1, borderColor: "#gray" }}>
                <View style={{ backgroundColor: "black", height: "50%", padding: 2, borderWidth: 1, borderColor: "#gray", opacity: 0.7 }}>
                  <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>carbs</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>14g</Text>

              </View>
            </View>
          </View>
        </View>
        {/* ))} */}
      </View>
    </ScrollView>
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