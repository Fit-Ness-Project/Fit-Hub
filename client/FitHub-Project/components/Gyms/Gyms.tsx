import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Gym } from "./Gyminterface";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Footer from "../../screens/Footer/Footer";

export default function Gyms() {
  const [GymData, setGymData] = useState<Gym[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("http://192.168.11.161:5000/gyms")

      .then((response) => {
        setGymData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return (
    <View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 50 }}>
          {GymData.map((e, k) => (
            <View key={k} style={tw`h-52 w-full p-2 bg-transparent  `}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Gym", {
                    gymName: e.gymName,
                    imgUrl: e.imgUrl,
                    rating: e.rating,
                    description: e.description,
                    fields: e.fields,
                    price: e.price,
                    latitude: e.latitude,
                    longitude: e.longitude,
                    phoneNumber: e.phoneNumber,
                    adress: e.adress,
                  })
                }
              >
                <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: e.imgUrl }}
                >
                  <View
                    style={tw`bg-transparent h-16 absolute inset-x-0 bottom-16  w-full`}
                  >
                    <View style={styles.view}>
                      <View style={styles.inview}>
                        <Image
                          style={tw` w-10 h-10  `}
                          source={require("../../assets/Icons/gym1.png")}
                        />
                        <View
                          style={tw`h-10 items-center bg-transparent pt-1 `}
                        >
                          <Text style={tw`text-black text-3xl pl-2 font-bold`}>
                            {e.gymName}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  view: {
    backgroundColor: "#36e08b",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    opacity: 0.7,
  },
  inview: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
});
