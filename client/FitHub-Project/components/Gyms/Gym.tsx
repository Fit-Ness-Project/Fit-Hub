import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { AirbnbRating } from "react-native-ratings";
import { RouteProp } from "@react-navigation/native";
import Map from "./Map";
import Footer from "../../screens/Footer/Footer";

const Gym: React.FC<{
  route: RouteProp<
    {
      params: {
        gymName: string;
        imgUrl: string;
        rating: number;
        description: string;
        fields: string;
        price: number;
        latitude: string;
        longitude: string;
        adress: string;
        phoneNumber: number;
      };
    },
    "params"
  >;
}> = ({ route: { params } }): any => {
  return (
    <View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 10, marginBottom: 60 }}>
          <View style={{ width: "100%", padding: 10 }}>
            <View style={{ width: "100%", height: 200 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: params.imgUrl }}
              />
            </View>

            <View style={{ width: "100%", height: "auto" }}>
              <Text style={tw`text-black p-3 text-2xl font-bold `}>
                {params.gymName}
              </Text>
            </View>

            <View style={tw`flex pl-6 h-2 flex-row`}>
              <AirbnbRating
                count={6}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={params.rating / 2}
                size={12}
                showRating={false}
              />
            </View>
            <View
              style={{ flexDirection: "row", paddingTop: 15, paddingLeft: 15 }}
            >
              <Image
                style={tw`w-4 h-4 `}
                source={require("../../assets/Icons/pin.png")}
              />
              <Text style={tw`text-black pl-2`}>{params.adress}</Text>
            </View>

            <View
              style={{ flexDirection: "row", paddingTop: 15, paddingLeft: 20 }}
            >
              <Text style={tw`text-black text-lg font-bold`}>
                150{" "}
              </Text>
              <Text style={tw`text-black font-bold`}>TND</Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: 15 }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  height: 40,
                  width: "90%",
                  backgroundColor: "#E7FF19",
                  opacity: 0.8,
                  paddingTop: 6,
                }}
                onPress={()=> {Linking.openURL('https://api.konnect.network/mJ7wOAjEM')}}
              >
                <Text style={tw`text-black font-bold text-lg `}>
                  SUBSCRIBE{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={tw`p-6 font-bold text-black text-xl`}>
                Description
              </Text>
            </View>
            <View>
              <Text style={tw`pl-5 pr-4 text-black text-xs `}>
                {params.description}
              </Text>
            </View>
            <View style={{ width: "100%", height: 200, paddingTop: 15 }}>
              <Map
                longi={params.longitude}
                latit={params.latitude}
                name={params.gymName}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </View>
    </View>
  );
};

export default Gym;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  img: {
    width: 350,
    height: 400,
  },
});
