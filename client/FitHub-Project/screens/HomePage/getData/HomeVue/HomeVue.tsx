import React from "react";
import { View, Text, TouchableOpacity } from "../../../../components/Themed";
import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import tw from "tailwind-react-native-classnames";

export default function ChangeView({
  navigation,
}: RootTabScreenProps<"changeViewProps">) {
  return (
    <View style={tw`pt-24 flex flex-col h-full  items-center `}>
      <View style={tw`w-3/12`}></View>
      <View style={tw`w-4/12 flex flex-row`}>
        <View style={tw`h-1/6`}></View>
        <View style={{ width: 120, height: 120 }}>
          <Image
            source={require("../../../../assets/Icons/Food.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Food")}>
            <Text>Food</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 120, height: 120 }}>
          <Image
            source={require("../../../../assets/Icons/Blog.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
            <Text> Blogs </Text>
          </TouchableOpacity>
        </View>

        <View />
      </View>
      <View style={tw`w-4/12 flex flex-row`}>
        <View style={tw`h-1/6 `}></View>
        <View style={{ width: 120, height: 120 }}>
          <Image
            source={require("../../../../assets/Icons/Gym.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Gym")}>
            <Text> Gym</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 120, height: 120 }}>
          <Image
            source={require("../../../../assets/Icons/couach.jpg")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("coach")}>
            <Text>Coach</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`w-4/12 flex flex-row`}>
        <View style={tw`h-1/6 `}></View>
        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/Event.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Events")}>
            <Text>Event</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/Bmi.jpg")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("bmi")}>
            <Text>Bmi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
