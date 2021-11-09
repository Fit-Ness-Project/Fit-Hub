import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { AirbnbRating } from "react-native-ratings";
import { RouteProp } from "@react-navigation/native";
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
}> = ({ route: { params } }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ width: "100%" }}>
        <View style={{ width: "100%", height: 200 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: params.imgUrl }}
          />
        </View>
        <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 5 }}>
          <Image
            style={tw`w-4 h-4`}
            source={require("../../assets/Icons/adress.png")}
          />
          <Text style={tw`text-black pl-2`}>{params.adress}</Text>
        </View>
        <View style={{ width: "100%", height: "auto" }}>
          <Text style={tw`text-gray-600 p-3 text-2xl font-bold `}>
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
        <View style={{ flexDirection: "row", padding: 15 }}>
          <Text style={tw`text-gray-600 text-lg font-bold`}>
            {params.price}{" "}
          </Text>
          <Text style={tw`text-gray-600 font-bold`}>DT</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              alignItems: "center",
              height: 40,
              width: "100%",
              backgroundColor: "#36e08b",
              opacity: 0.8,
              paddingTop: 6,
            }}
          >
            <Text style={tw`text-black font-bold text-lg`}>SUBSCRIBE </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={tw`p-6 font-bold text-gray-600 text-xl`}>
            Description
          </Text>
        </View>
        <View>
          <Text style={tw`pl-6 text-gray-600 text-sm`}>
            {params.description}
          </Text>
        </View>
        <View style={{ width: "100%", height: 200, padding: 20 }}>
          <Image
            style={tw`w-full h-full`}
            source={require("../../assets/images/map.png")}
          />
        </View>
      </View>
    </ScrollView>
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
