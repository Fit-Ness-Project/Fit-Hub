import * as React from "react";
import { FoodR } from "./interface";
import { Dimensions, ScrollView, View, ImageBackground } from "react-native";
import { Text, Image } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import Footer from "../../screens/Footer/Footer";
import tw from "tailwind-react-native-classnames";
import { RouteProp } from "@react-navigation/native";
const screenWidth = Dimensions.get("screen").width;

const Food: React.FC<{
  route: RouteProp<
    {
      params: {
        recipeTitle:string;
  created_at: string;
  content: string ;
  likes: number;
  imageUrl: string;
  kcal: number;
  fat: number;
  carb: number;
  saturates: number;
  sugar: number;
  fibre: number;
  protein: number;
  salt: number;
  ingredients:string;
  methodes: string;
      };
    },
    "params"
  >;
}> = ({ route: { params } }): any => {
  return (
    <View>
      <ScrollView style={tw`bg-red-300`}>
        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 50 }}>
          <View
            style={{
              width: "90%",
              height: "100%",
              backgroundColor: "white",
              alignItems: "center",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <ImageBackground
              style={{ width: "100%", height: 400 }}
              source={require("../../assets/images/diets3.png")}
            ></ImageBackground>
            <View style={tw`mt-4`}>
              <Text style={tw`text-xl font-bold text-green-00`}>
                {params.recipeTitle}
              </Text>
            </View>
            <View style={tw`items-center`}>
              <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={100 / 2}
                size={12}
                showRating={false}
              />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`text-lg text-black font-semibold`}>
                Preparation Time
              </Text>
            </View>
            <View style={tw`flex flex-row mt-6`}>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    kcal
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.kcal}</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    fat
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.fat}g</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    saturates
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.saturates}g</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    carbs
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.carb}g</Text>
              </View>
            </View>
            <View style={tw`flex flex-row mt-6`}>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    sugar
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.sugar}g</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    fibre
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.fibre}g</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    protein
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.protein}g</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "20%",
                  borderWidth: 1,
                  borderColor: "#gray",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#36E08B",
                    height: "50%",
                    padding: 2,
                    borderColor: "#gray",
                    opacity: 0.7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    salt
                  </Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>{params.salt}g</Text>
              </View>
            </View>
            <View style={tw`ml-6 mr-6 mt-3`}>
              <Text style={tw`font-bold`}>Ingredients:</Text>
          { params.ingredients.split("*").map((e,k)=>{
            return(
              <Text key = {k} style={tw`text-base mt-1`}>
             {e}
            </Text>
          )})}
            </View>
            <View style={tw`ml-6 mr-6 mt-3`}>
              <Text style={tw`font-bold`}>Methods:</Text>
              <Text style={tw`text-base mt-1`}>
                1- Heat oven to 220C/200C fan/gas 7. Pat chips dry on kitchen
                paper, then lay in a single layer on a large baking tray.
                Drizzle with half the olive oil and season with salt. Cook for
                40 mins, turning after 20 mins, so they cook evenly.
              </Text>
              <Text style={tw`text-base`}>
                2- Mix the breadcrumbs with the lemon zest and parsley, then
                season well. Top the cod evenly with the breadcrumb mixture,
                then drizzle .0with the remaining oil. Put in a roasting tin
                with the cherry tomatoes, then bake in the oven for the final 10
                mins of the chips’ cooking time.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </View>
    </View>
  );
}
export default Food