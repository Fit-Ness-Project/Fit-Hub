

import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text, View, Button,StyleSheet} from "react-native";
import tw from "tailwind-react-native-classnames";
import axios from "axios";


export const createEvent = () => {
  function handelSubmit ()  {
    axios.post('https://fithub-tn-app.herokuapp.com/events',{
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
    <View style={tw`bg-gray-100 p-5 h-full`}>
    <View style={tw`bg-white h-5/6  w-80`} >
    <View style={tw` mt-10  items-center`}>
 
      <View style={tw`m-2 w-72 `}>
      <Text style={tw`font-bold text-black`}>Event Name</Text>
    <TextInput
      style={styles.input}
      value={EventName}
      onChangeText={setEventName}
    />
     </View>
     <View style={tw`m-2 w-72`}>
    <Text style={tw`font-bold text-black`}>Description</Text>
    <TextInput
      style={styles.input}
      value={Description}
      onChangeText={setDescription}
    />
     </View>
     <View style={tw`m-2 w-72`}>
    <Text style={tw`font-bold text-black`}>Date</Text>
    <TextInput
      style={styles.input}
      value={date}
      onChangeText={setDate}
    />
      </View>
      <View style={tw`m-2 w-72`}>
     <Text style={tw`font-bold text-black`}>Username</Text>
    <TextInput
      style={styles.input}
      value={user}
      onChangeText={setuser}
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
  );
};
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
    // <View style={tw` mt-10 w-4/5 ml-8 flex `}>
      
    //   <TextInput
    //     style={tw`mt-4 rounded h-10 bg-white p-2 `}
    //     placeholder="imageurl"
    //     value={imageurl}
    //     onChangeText={setimageurl}
    //   />
     
    //   <TextInput
    //     style={tw`mt-4 rounded h-10 bg-white p-2 `}
    //     placeholder="EventName"
    //     value={EventName}
    //     onChangeText={setEventName}
    //   />
    
    //   <TextInput
    //     style={tw`mt-4 rounded h-10 bg-white p-2 `}
    //     placeholder="description"
    //     value={Description}
    //     onChangeText={setDescription}
    //   />
    
    //   <TextInput
    //     style={tw`mt-4 rounded h-10 bg-white p-2 `}
    //     placeholder="date"
    //     value={date}
    //     onChangeText={setDate}
    //   />
   
    //   <TextInput
    //     style={tw`mt-4 rounded h-10 bg-white p-2 `}
    //     placeholder="user Name"
    //     value={user}
    //     onChangeText={setuser}
    //   />
  
    //   <Button onPress={handelSubmit} title="Submit" />
    
    // </View>