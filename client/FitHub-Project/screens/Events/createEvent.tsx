import React, { useState } from "react";
import { TextInput, Text, View, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import axios from "axios";


export const createEvent = () => {
  function handelSubmit ()  {
    axios.post('https://fithub-tn-app.herokuapp.com/events',{
      eventName:EventName,
      adress:Adress,
      description:Description,
      date:date,
      max_number:maxNumber,
      imageUrl:imageUrl
    }
    ).then((res)=>
    console.log(res.data))
    .catch((err)=>console.log(err))
  }
  let [EventName, setEventName] = useState('');
  let [Adress, setAdress] = useState('');
  let [Description, setDescription] = useState('');
  let [date, setDate] = useState('');
  let [maxNumber,setmaxNumber]=useState('0');
  let [imageUrl,SetimageUrl] = useState('');
  
  console.log(EventName,Adress,Description,maxNumber,imageUrl,date)
  return (
    <View style={tw` mt-10 w-4/5 ml-8 flex `}>
      <Text>image</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="imageUrl"
        value={imageUrl}
        onChangeText={SetimageUrl}
      />
        <Text>Event Name</Text>
      <Text>Event Name</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="EventName"
        value={EventName}
        onChangeText={setEventName}
      />
      <Text>Description</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="Description"
        value={Description}
        onChangeText={setDescription}
      />
      <Text>Date</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Text>Adress</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="Adress"
        value={Adress}
        onChangeText={setAdress}
      />
       <Text>maxNumber</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="maxNumber"
        value={maxNumber}
        onChangeText={setmaxNumber}
      />
      <Button onPress={handelSubmit} title="Submit" />
    </View>
  );
};