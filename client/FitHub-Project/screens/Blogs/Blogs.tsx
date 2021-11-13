import * as React from "react";
// import EditScreenInfo from '../../components/EditScreenInfo';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useEffect, useState, useRef } from "react";
import { Rating } from "react-native-elements";
import axios from "axios";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Blog } from "./interface";
import tw from "tailwind-react-native-classnames";
import Footer from "../../screens/Footer/Footer";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const viewConfigRef = { viewAreaCoveragePercentTreshold: 95 };

export default function Blogs() {
  const navigation = useNavigation();

  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get("https://fithub-tn-app.herokuapp.com/blogs")
      .then((response) => {
        setBlogData(response.data);
        console.log("data:", blogData);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={tw` items-center bg-gray-100`}>
        {blogData.map((item, k) => (
          <View
            style={{ marginBottom: 10, height: 400, marginTop: 10 }}
            key={k}
            >
            <View style={tw` h-72 flex flex-col mr-4 ml-4 rounded`}>
              <View style={tw`w-80 mt-4 h-5/6 items-center`}>
                <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.imageUrl }}
                ></ImageBackground>
              </View>
              <View style={tw` mt-2 ml-2`}>
                <Text style={tw` text-lg font-bold `}>{item.blogTitle}</Text>
                {/* <View style={tw` flex flex-row`}>
                    <Text style={tw`ml-1 `}>By Author</Text>
                  </View> */}
              </View>

              <View style={tw` flex flex-row ml-2`}>
                <MaterialIcons name="date-range" size={20} color="black" />
                <Text style={tw`text-black ml-1  `}>
                  created at: {item.date}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#e7ff19",
                  height: 46,
                  width: 120,
                  marginLeft: 200,
                }}
                onPress={() =>
                  navigation.navigate("blog", {
                    id: item.id,
                    blogTitle: item.blogTitle,
                    imageUrl: item.imageUrl,
                    content: item.content,
                    date: item.date,
                    like: item.like,
                  })
                }
              >
                <Text style={tw` mt-2 font-bold text-lg `}>See More</Text>
              </TouchableOpacity>
            </View>
          </View>

          // {/* <View style={{ position: "absolute", bottom: -48, width: "100%" }}>
          //   <Footer />
          // </View> */}
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
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
