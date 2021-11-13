import React,{useState,useEffect} from 'react'
import { View, Text , TextInput , Button } from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
const EditProfile = () => {
    
      let [phone_number, setmobilePhone] = useState('0')
      let [email, setemail] = useState('')
      let [Password,setPassword] = useState('')
      // let [weight,setweight]=useState('')
     let[userId,setUserId] = useState(null)

     useEffect(()=>{
      
      AsyncStorage.getItem('key').then(res=>{
        const token = res
       let id = jwtDecode(token)
     
       setUserId(id.user_id)

      })

     },[])

     function handelSubmit () {
       // putt back the deploid link 
      axios.patch(`https://fithub-tn-app.herokuapp.com/users${userId}`,{
        phone_number:phone_number,
        email: email,
        password:Password,
        weight:weight,
        height:height
      }).then((res)=>
      console.log(res.data))
      .catch((err)=>console.log(err))
      }

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
          value={phone_number}
          onChangeText={setmobilePhone}
        />
        <Button onPress={handelSubmit} title="Submit" />
      </View>
    )
}
export default EditProfile