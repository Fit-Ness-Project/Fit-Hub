import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, View} from '../Themed'
import { Card, Title, Paragraph , Button } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Profile } from './interface';

const myprofile = () => {
  const userId = 0;
function handelSubmit () {
axios.patch(`http://localhost:5000/users${userId}`,{
  id: usersId ,
  first_name:firstName ,
  last_name: lastName,
  mobile_phone: mobilePhone,
  email: email,
  likes: likes,
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
  event_joined_id:eventJoinedId,
  bmi: bmi,
  weight:weight,
  height:height,
  age: age,
  gender:gender
}).then((res)=>
console.log(res.data))
.catch((err)=>console.log(err))
}
let [usersId, setusersId] = useState(0)
  let [firstName, setfirstName] = useState('')
  let [lastName, setlastName] = useState('')
  let [mobilePhone, setmobilePhone] = useState(0)
  let [email, setemail] = useState('')
  let [likes, setlikes] = useState(0)
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
  let [eventJoinedId,seteventJoinedId] = useState(0)
  let [bmi,setbmi]= useState(0)
  let [weight,setweight]=useState(0)
  let [height,setheight]=useState(0)
  let [age,setage]=useState(0)
  let [gender,segender]=useState('')





    return (
        <SafeAreaProvider>
     {/* my profile car view start here */}
     <View style={tw` flex flex-row  h-full `}>

<View style={tw`w-5/12 flex flex-col `}>
  <View style={tw`h-3/6 bg-red-300 rounded-2xl`}>
  <Text style={tw`text-center text-lg`}>My Profile</Text>
<Card style = {{ width:150,height:50}}>
<Card.Content>
<Title>DhaferHmidi</Title>
<Paragraph> 22 y o Full Stuck JS freshly graduated </Paragraph>
</Card.Content>
{/* profile picture will be here */}
<Card.Cover  source={{ uri: 'https://miro.medium.com/fit/c/262/262/0*XwNVrhNAsKXkRo8l' }} />
<Button>Modfidy</Button>
</Card>
  </View>
  <View style={tw`h-3/6 `}>
  <Text style={tw`text-center text-lg`}>Events</Text>
  <Text>Events list will be here</Text>
<View style={tw`h-2/6 bg-yellow-900 rounded-3xl`}>
  <Text style={tw`text-center text-lg`}>Gyms</Text>
<Text>Gyms will be here</Text>

</View>
</View>
</View>


{/* right vue */}
<View style={tw`w-7/12 flex flex-col bg-red-500 rounded-3xl`}>
<View style={tw`h-2/6  rounded-3xl`}>
<Text style={tw`text-center text-lg`}>Blogs here</Text>
<Text>Blogs here</Text>


</View>
<View style={tw`h-1/6 bg-red-500  rounded-3xl`}>

<Text style={tw`text-center text-lg`}>Food here</Text>
<Text>Food liked here</Text>
 
 <Text>liked</Text>
</View>
<View style={tw`h-2/6 bg-yellow-500 rounded-3xl`}>
<Text style={tw`text-center text-lg`}>Coach here</Text>


</View>
<View style={tw`h-2/6 bg-yellow-200 rounded-3xl`}>
<Text style={tw`text-center text-lg`}>BMI here</Text>


</View>


  </View>
 </View>
 </SafeAreaProvider>
    )
}

export default myprofile

const styles = StyleSheet.create({})
