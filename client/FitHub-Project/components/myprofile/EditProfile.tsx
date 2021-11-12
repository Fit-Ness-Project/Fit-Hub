


import React, { useState } from 'react'
import { View, Text, TextInput, Button, ImageBackground, Image, TouchableOpacity } from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
const EditProfile = () => {
  const userId = 0;
  function handelSubmit() {
    axios.patch(`http://localhost:5000/users/${userId}`, {
      mobile_phone: Number(mobilePhone),
      email: email,
      hashed_password: Password,
      weight: Number(weight),
      height: Number(height)
    }).then((res) =>
      console.log(res.data))
      .catch((err) => console.log(err))
  }
  let [mobilePhone, setmobilePhone] = useState('')
  let [email, setemail] = useState('')
  let [Password, setPassword] = useState('')
  let [weight, setweight] = useState('')
  let [height, setheight] = useState('')
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", alignItems: "center" }}
      source={require("../../assets/images/back.jpg")}
    >
      <View style={tw` h-16  w-4/5 mt-2`} >
        <Image style={tw` w-full h-full `} source={require("../../assets/images/logo.png")} />
        </View>
    const userId = 6;
    function handelSubmit () {
    axios.patch(`https://fithub-tn-app.herokuapp.com/${userId}`,{
      mobile_phone:mobilePhone,
      email: email,
      hashed_password:  Password,
      weight:weight,
      height:height
    }).then((res)=>
    console.log(res.data))
    .catch((err)=>console.log(err))
    }
      let [mobilePhone, setmobilePhone] = useState('0')
      let [email, setemail] = useState('')
      let [Password,setPassword] = useState('')
      let [weight,setweight]=useState('0')
      let [height,setheight]=useState('0')

    return (
        <View style={tw` mt-10 w-4/5 ml-8 flex `}>
        <Text>weight</Text>
        <TextInput
          style={tw`mt-4 rounded h-10 bg-white p-2 `}
          placeholder="weight"
          value={weight}
          onChangeText={setweight}
        />
          <Text>height</Text>
   
        <TextInput
          style={tw`mt-4 rounded h-10 bg-white p-2 `}
          placeholder="height"
          value={height}
          onChangeText={setheight}
        />
        <Text>Password</Text>
        <TextInput
          style={tw`mt-4 rounded h-10 bg-white p-2 `}
          placeholder="Password"
          value={Password}
          onChangeText={setPassword}
        />
        <Text>email</Text>
        <TextInput
          style={tw`mt-4 rounded h-10 bg-white p-2 `}
          placeholder="email"
          value={email}
          onChangeText={setemail}
        />
         <Text>mobilePhone</Text>
        <TextInput
          style={tw`mt-4 rounded h-10 bg-white p-2 `}
          placeholder="mobilePhone"
          value={mobilePhone}
          onChangeText={setmobilePhone}
        />
        <Button onPress={handelSubmit} title="Submit" />
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
        <TouchableOpacity onPress={handelSubmit} style={{ marginTop: 4, width: 320, height: 40, alignItems: "center", backgroundColor: "#E7FF19" }}>
          <Text style={tw`mt-1 text-lg font-semibold`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
export default EditProfile



// import React,{useState} from 'react'
// import { View, Text , TextInput , Button } from 'react-native'
// import axios from 'axios';
// import tw from 'tailwind-react-native-classnames';

// const EditProfile = () => {
//     const userId = 0;
//     function handelSubmit () {
//     axios.patch(`http://localhost:5000/users/${userId}`,{
//       mobile_phone:Number(mobilePhone),
//       email: email,
//       hashed_password:  Password,
//       weight:Number(weight),
//       height:Number(height)
//     }).then((res)=>
//     console.log(res.data))
//     .catch((err)=>console.log(err))
//     }
//       let [mobilePhone, setmobilePhone] = useState('0')
//       let [email, setemail] = useState('')
//       let [Password,setPassword] = useState('')
//       let [weight,setweight]=useState('0')
//       let [height,setheight]=useState('0')

//     return (
//         <View style={tw` mt-10 w-4/5 ml-8 flex `}>
//         <Text>weight</Text>
//         <TextInput
//           style={tw`mt-4 rounded h-10 bg-white p-2 `}
//           placeholder="weight"
//           value={weight}
//           onChangeText={setweight}
//         />
//           <Text>height</Text>

//         <TextInput
//           style={tw`mt-4 rounded h-10 bg-white p-2 `}
//           placeholder="height"
//           value={height}
//           onChangeText={setheight}
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={tw`mt-4 rounded h-10 bg-white p-2 `}
//           placeholder="Password"
//           value={Password}
//           onChangeText={setPassword}
//         />
//         <Text>email</Text>
//         <TextInput
//           style={tw`mt-4 rounded h-10 bg-white p-2 `}
//           placeholder="email"
//           value={email}
//           onChangeText={setemail}
//         />
//          <Text>mobilePhone</Text>
//         <TextInput
//           style={tw`mt-4 rounded h-10 bg-white p-2 `}
//           placeholder="mobilePhone"
//           value={mobilePhone}
//           onChangeText={setmobilePhone}
//         />
//         <Button onPress={handelSubmit} title="Submit" />
//       </View>
//     )
// }

// export default EditProfile

