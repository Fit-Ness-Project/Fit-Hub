import * as React from "react";

import tw from "tailwind-react-native-classnames";
import { View, TextInput, Text } from "react-native";

export default function Community() {
  const [addPost, setAddPost] = React.useState('')
  const [post, setPost] = React.useState([])
 

  return (
    <View style={tw`bg-gray-500 `}>
      <View style={tw`bg-gray-500 mt-14 `}  >
        <View style={{
          alignItems: "center",
          backgroundColor: "red",
          flexDirection: "row",
        }}>
          <TextInput
            style={tw`border border-gray-900 bg-white  w-2/3 ml-16 mt-5 h-10`}
            placeholder=" Write your post here ..."
            value={addPost}
            onChangeText={setAddPost}
          />
          <Text
            onPress={() => console.log(addPost)}
            style={tw`pt-3 pl-2 text-white font-bold`}>Post</Text>
        </View>

      </View>
      <View style={tw`bg-gray-200 h-3/5`}>
    <Text> {addPost}  </Text>
      </View>
    </View>
  );
}





