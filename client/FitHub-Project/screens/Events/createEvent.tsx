import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text, View, Button,ImageBackground,Image } from "react-native";
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
        // value={height}
        // onChangeText={setheight}
      />
      </View>
        <View style={tw`flex-row w-80 mt-5`}>
      <TextInput
        style={tw`h-10 w-80 bg-white p-2 `}
        placeholder="weight"
        // value={weight}
        // onChangeText={setweight}
      />
      </View>
      <View style={tw`flex-row w-80 mt-5`}>
      <TextInput
        style={tw`h-10 w-80 bg-white p-2 `}
        placeholder="*******"
        // value={Password}
        // secureTextEntry={true}
        // onChangeText={setPassword}
      />
      </View>
      <View style={tw`flex-row w-80 mt-5`}>
      <TextInput
        style={tw`h-10 w-80 bg-white p-2 `}
        placeholder="*******"
        // value={weight}
        // onChangeText={setPassword}
      />
      </View>
    </View>
    <View style={tw`mt-14 h-20 items-center`}>
      <TouchableOpacity onPress={handelSubmit} style={{marginTop:4,width:320,height:40,alignItems:"center",backgroundColor:"#E7FF19"}}>
        <Text style={tw`mt-1 text-lg font-semibold`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// import React, { useState } from "react";
// import { TouchableOpacity, TextInput, Text, View, Button } from "react-native";
// import tw from "tailwind-react-native-classnames";
// import axios from "axios";


// export const createEvent = () => {
//   function handelSubmit ()  {
//     axios.post('http://localhost:5000/events',{
//         eventName:EventName,
//         adress:Adress,
//         description:Description,
//         date:date,
//         created_by:user,
//         id:id,
//         user_id:user_id,
//         created_at:created_at,
//         created_by_id:created_by_id,
//         imageurl:imageurl
//       }
//       ).then((res)=>
//       console.log(res.data))
//       .catch((err)=>console.log(err))
//     }
//   let [id, setid] = useState(0)
//   let [EventName, setEventName] = useState('')
//   let [user_id, setuser_id] = useState(0)
//   let [Adress, setAdress] = useState('')
//   let [Description, setDescription] = useState('')
//   let [date, setDate] = useState('')
//   let [user, setuser] = useState('')
//   let [created_at,setcreated_at] = useState('')
//   let [created_by_id,setcreated_by_id]= useState(0)
//   let [imageurl,setimageurl]=useState('')
//   return (
//     <View style={tw` mt-10 w-4/5 ml-8 flex `}>
//       <Text>image</Text>
//       <TextInput
//         style={tw`mt-4 rounded h-10 bg-white p-2 `}
//         placeholder="imageurl"
//         value={imageurl}
//         onChangeText={setimageurl}
//       />
//         <Text>Event Name</Text>
//       <Text>EventName</Text>
//       <TextInput
//         style={tw`mt-4 rounded h-10 bg-white p-2 `}
//         placeholder="EventName"
//         value={EventName}
//         onChangeText={setEventName}
//       />
//       <Text>description</Text>
//       <TextInput
//         style={tw`mt-4 rounded h-10 bg-white p-2 `}
//         placeholder="description"
//         value={Description}
//         onChangeText={setDescription}
//       />
//       <Text>date</Text>
//       <TextInput
//         style={tw`mt-4 rounded h-10 bg-white p-2 `}
//         placeholder="date"
//         value={date}
//         onChangeText={setDate}
//       />
//       <Text>user Name</Text>
//       <TextInput
//         style={tw`mt-4 rounded h-10 bg-white p-2 `}
//         placeholder="user Name"
//         value={user}
//         onChangeText={setuser}
//       />
//       <Button onPress={handelSubmit} title="Submit" />
//     </View>
//   );
// };