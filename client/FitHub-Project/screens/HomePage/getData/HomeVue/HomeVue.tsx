import React from "react";
import { View, Text ,TouchableOpacity } from "../../../../components/Themed";
import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";

export default function ChangeView({navigation}: RootTabScreenProps<"changeViewProps"> ){
  return (
    <View>
      <View>
        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/Food.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity onPress={()=>navigation.navigate('Food')} >
            <Text >Food</Text>
             </TouchableOpacity>
        </View>
        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/Blog.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity  onPress={()=>navigation.navigate('Blogs')}><Text> Blogs </Text></TouchableOpacity>
        </View>
       </View>
      <View>
        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/Gym.png")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity  onPress={()=>navigation.navigate('Gym')}  ><Text> Gym</Text> </TouchableOpacity>
        </View>
        <View style={{ width: 120, height: 120, marginRight: 12 }}>
          <Image
            source={require("../../../../assets/Icons/couach.jpg")}
            style={{ width: 70, height: 70 }}
          />
          <TouchableOpacity  onPress={()=>navigation.navigate('coach')}> <Text>Coach</Text> </TouchableOpacity>
         </View>
      </View>
    </View>
  );
}
