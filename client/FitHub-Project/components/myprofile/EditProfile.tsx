import React,{useState} from 'react'
import { View, Text , TextInput , Button } from 'react-native'
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
 
const EditProfile = () => {
    const userId = 0;
    function handelSubmit () {
        console.log(age)
    axios.patch(`http://localhost:5000/users${userId}`,{
      id:Number(usersId) ,
      first_name:firstName ,
      last_name: lastName,
      mobile_phone:Number(mobilePhone),
      email: email,
      likes: Number(likes),
      comments: comments,
      hashed_password:  Password,
      last_login: lastLogin,
      registred_at: registredAt,
      events_joined: events,
      healthy_food_posted: healthyFoodPosted,
      healthy_food_liked: healthyFoodLiked,
      healthy_food: healthyFood,
      gyms: gyms,
      event_created: eventCreated,
      event_joined_id:Number(eventJoinedId),
      bmi:Number(bmi),
      weight:Number(weight),
      height:Number(height),
      age:Number(age),
      gender:gender
    }).then((res)=>
    console.log(res.data))
    .catch((err)=>console.log(err))
    }
    let [usersId, setusersId] = useState('0')
      let [firstName, setfirstName] = useState('')
      let [lastName, setlastName] = useState('')
      let [mobilePhone, setmobilePhone] = useState('0')
      let [email, setemail] = useState('')
      let [likes, setlikes] = useState('0')
      let [comments, setcomments] = useState('')
      let [Password,setPassword] = useState('')
      let [lastLogin,setlastLogin]= useState('')
      let [registredAt,setregistredAt]= useState('')
      let [events,setevents]=useState('')
      let [healthyFoodPosted,sethealthyFoodPosted]=useState('')
      let [healthyFoodLiked,sethealthyFoodLiked]=useState('')
      let [healthyFood,sehealthyFood]=useState('')
      let [gyms, setgyms] = useState('')
      let [eventCreated, seteventCreated] = useState('')
      let [eventJoinedId,seteventJoinedId] = useState('0')
      let [bmi,setbmi]= useState('0')
      let [weight,setweight]=useState('0')
      let [height,setheight]=useState('0')
      let [age,setage]=useState('0')
      let [gender,segender]=useState('')

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
        <Button onPress={handelSubmit} title="Submit" />
      </View>
    )
}

export default EditProfile
