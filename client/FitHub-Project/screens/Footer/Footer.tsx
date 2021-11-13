import * as React from "react";
import { View, TouchableOpacity, Text } from "../../components/Themed";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const ChangeView = ({ }) => {
  const navigation = useNavigation()
  return (
    // tw `flex flex-row h-12 bg-gray-300 rounded`
    <SafeAreaView>
      <View style={{ flexDirection: "row", height: 52, backgroundColor: "black", opacity: 0.9 }}>
        <TouchableOpacity
          style={tw`w-10 bg-transparent ml-8 mt-1`}
          onPress={() => {
            navigation.navigate("ProfileInfo");
          }}
        >
          <View style={tw`bg-transparent `}>
            <Ionicons name="person-circle" size={24} color="#e7ff19" />
            <Text style={tw`w-24 -ml-1 text-white`}>Profile</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity
          style={tw`w-10 bg-transparent ml-24 mt-1`}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={tw`items-center bg-transparent`}>
            <FontAwesome5 name="home" size={24} color="#e7ff19" />
            <Text style={tw`text-white`}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-10 bg-transparent ml-24 mt-1`}
          onPress={() => {
            navigation.navigate("NotFound");
          }}
        >
          <View style={tw`items-center bg-transparent`}>
            <Ionicons name="people" size={24} color="#e7ff19" />
            <Text style={tw`w-24 ml-5 text-white`}>Community</Text>

          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default ChangeView;
