

import React,{useState} from 'react'
import { View, Text , TextInput , Button, ImageBackground,Image,TouchableOpacity} from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
const EditProfile = () => {
    const userId = 0;
    function handelSubmit () {
    axios.patch(`http://localhost:5000/users/${userId}`,{
      mobile_phone:Number(mobilePhone),
      email: email,
      hashed_password:  Password,
      weight:Number(weight),
      height:Number(height)
    }).then((res)=>
    console.log(res.data))
    .catch((err)=>console.log(err))
    }
      let [mobilePhone, setmobilePhone] = useState('')
      let [email, setemail] = useState('')
      let [Password,setPassword] = useState('')
      let [weight,setweight]=useState('')
      let [height,setheight]=useState('')
    return (
      <ImageBackground
      style={{ width: "100%", height: "100%",alignItems:"center" }}
      source={require("../../assets/images/back.jpg")}
    >
        <View style={tw` h-16  w-4/5 mt-2`} >  
        <Image style={tw` w-full h-full `} source={require("../../assets/images/logo.png")} />
      </View>
        <View style={tw`mt-64 items-center `}>
          <View style={tw`flex-row w-80`}>
        <TextInput
          style={tw`h-10 w-80 bg-white p-2 `}
          placeholder="height"
          value={height}
          onChangeText={setheight}
        />
        </View>
          <View style={tw`flex-row w-80 mt-5`}>
        <TextInput
          style={tw`h-10 w-80 bg-white p-2 `}
          placeholder="weight"
          value={weight}
          onChangeText={setweight}
        />
        </View>
        <View style={tw`flex-row w-80 mt-5`}>
        <TextInput
          style={tw`h-10 w-80 bg-white p-2 `}
          placeholder="*******"
          value={Password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        </View>
        <View style={tw`flex-row w-80 mt-5`}>
        <TextInput
          style={tw`h-10 w-80 bg-white p-2 `}
          placeholder="*******"
          value={weight}
          onChangeText={setPassword}
        />
        </View>
      </View>
      <View style={tw`mt-14 h-20 items-center`}>
        <TouchableOpacity onPress={handelSubmit} style={{marginTop:4,width:320,height:40,alignItems:"center",backgroundColor:"#E7FF19"}}>
          <Text style={tw`mt-1 text-lg font-semibold`}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
}
export default EditProfile
// import * as WebBrowser from 'expo-web-browser';
// import * as React from 'react';
// import { StyleSheet, TouchableOpacity } from 'react-native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
// import { Text, View } from './Themed';

// export default function EditScreenInfo({ path }: { path: string }) {
//   return (
//     <View>
//       <View style={styles.getStartedContainer}>
//         <Text
//           style={styles.getStartedText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//         HOME PAGE 
//         </Text>

//         <View
//           style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
//           darkColor="rgba(255,255,255,0.05)"
//           lightColor="rgba(0,0,0,0.05)">
//           <MonoText>{path}</MonoText>
//         </View>

//         <Text
//           style={styles.getStartedText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//           Change any of the text, save the file, and your app will automatically update.
//         </Text>
//       </View>

//       <View style={styles.helpContainer}>
//         <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
//           <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
//             Tap here if your app doesn't automatically update after making changes
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
//   );
// }

// const styles = StyleSheet.create({
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightContainer: {
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   helpContainer: {
//     marginTop: 15,
//     marginHorizontal: 20,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     textAlign: 'center',
//   },
// });
