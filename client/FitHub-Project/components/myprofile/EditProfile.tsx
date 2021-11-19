import React,{useState,useEffect} from 'react'
import { View, Text , TextInput , Button ,StyleSheet,TouchableOpacity} from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
const EditProfile = () => {
    
      let [phone_number, setmobilePhone] = useState('')
      let [email, setemail] = useState('')
      let [Password,setPassword] = useState('')
      // let [weight,setweight]=useState('')
     let[userId,setUserId] = useState(null)

     useEffect(()=>{
      
      AsyncStorage.getItem('key').then((res:any)=>{
        const token = res
       let id = jwtDecode(token)
     
       setUserId(res.user_id)

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

      let [weight,setweight]=useState('')
      let [height,setheight]=useState('')
    return (
      <View style={tw`bg-gray-100 p-5 h-full`}>
        <View style={tw`bg-white h-5/6  w-80`} >
        <View style={tw` mt-10  items-center `}>
          <View style={tw`m-2 w-72`}>
        <Text style={tw`font-bold text-black`}>Weight</Text>
        <TextInput
            style={styles.input}
            value={weight}
          
            underlineColorAndroid="transparent"
            onChangeText={setweight}
          />
          </View>
          <View style={tw`m-2 w-72`}>
          <Text style={tw`font-bold text-black`}>Height</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setheight}
        />
         </View>
         <View style={tw`m-2 w-72`}>
        <Text style={tw`font-bold text-black`}>Password</Text>
        <TextInput
          style={styles.input}
          value={Password}
          onChangeText={setPassword}
        />
         </View>
         <View style={tw`m-2 w-72`}>
        <Text style={tw`font-bold text-black`}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setemail}
        />
          </View>
          <View style={tw`m-2 w-72`}>
         <Text style={tw`font-bold text-black`}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone_number}
          onChangeText={setmobilePhone}
        />
        </View>
        <View style={tw`m-6`}>
        <TouchableOpacity   style={{
                  alignItems: "center",
                  height: 40,
                  width: 300,
                  backgroundColor: "#E7FF19",
                  opacity: 0.8,
                  paddingTop: 8,
                }}  onPress={handelSubmit}>
          <Text style={tw`font-bold text-black`}>SUBMIT</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  seeMore: {
    backgroundColor: "#36e08b",
    alignItems: "center",
    opacity: .7,
    marginLeft: 6

  },

  input: {
    width: "95%",
    height: 40,
    borderWidth: 1.5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginLeft: 14,
    marginRight: 14,
  },

})

export default EditProfile