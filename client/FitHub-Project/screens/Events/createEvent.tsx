import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text, View , Button } from "react-native";
import { useFormik  } from "formik";
import tw from "tailwind-react-native-classnames";
import axios from "axios";


const validate =(values: any) => {
  console.log(values)
};


export const createEvent = () => {
  const formik = useFormik({
    initialValues: {
      eventName: '',
      adress: '',
      description: '',
      date: "",
      created_by: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <View  style={tw` mt-10 w-4/5 ml-8 flex `}>
    <Text>event Name</Text>
    <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="eventName"
         value={formik.values.eventName}
       />
<Text  >adress</Text>
    <TextInput
       style={tw`mt-4 rounded h-10 bg-white p-2 `}
       placeholder="adress"
         value={formik.values.adress}
       />
       <Text >description</Text>
    <TextInput
       style={tw`mt-4 rounded h-10 bg-white p-2 `}
       placeholder="description"
         value={formik.values.description}
       />
       <Text >date</Text>
    <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="date"
         value={formik.values.date}
       />
    <Text >user Name</Text>
    <TextInput
     style={tw`mt-4 rounded h-10 bg-white p-2 `}
     placeholder="user Name"
         value={formik.values.created_by}
       />
       <Button
       onPress ={()=>{}}
       title="Submit" />
 
    </View>
  );
};
