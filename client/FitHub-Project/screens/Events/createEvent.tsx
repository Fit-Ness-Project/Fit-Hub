

import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text, View, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import axios from "axios";


export const createEvent = () => {
  function handelSubmit ()  {
    axios.post('http://localhost:5000/events',{
        eventName:EventName,
        adress:Adress,
        description:Description,
        date:date,
        created_by:user,
        id:id,
        user_id:user_id,
        created_at:created_at,
        created_by_id:created_by_id,
        imageurl:imageurl
      }
      ).then((res)=>
      console.log(res.data))
      .catch((err)=>console.log(err))
    }
  let [id, setid] = useState(0)
  let [EventName, setEventName] = useState('')
  let [user_id, setuser_id] = useState(0)
  let [Adress, setAdress] = useState('')
  let [Description, setDescription] = useState('')
  let [date, setDate] = useState('')
  let [user, setuser] = useState('')
  let [created_at,setcreated_at] = useState('')
  let [created_by_id,setcreated_by_id]= useState(0)
  let [imageurl,setimageurl]=useState('')
  return (
    <View style={tw` mt-10 w-4/5 ml-8 flex `}>
      
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="imageurl"
        value={imageurl}
        onChangeText={setimageurl}
      />
     
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="EventName"
        value={EventName}
        onChangeText={setEventName}
      />
    
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="description"
        value={Description}
        onChangeText={setDescription}
      />
    
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="date"
        value={date}
        onChangeText={setDate}
      />
   
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="user Name"
        value={user}
        onChangeText={setuser}
      />
  
      <Button onPress={handelSubmit} title="Submit" />
    
    </View>
  );
};