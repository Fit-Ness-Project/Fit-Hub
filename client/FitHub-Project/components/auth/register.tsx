import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Formik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import { useKeepAwake } from "expo-keep-awake";
import { RootTabScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Register({}: RootTabScreenProps<"bmi">) {
  const navigation = useNavigation();
  useKeepAwake();
  const validationSchema = Yup.object().shape({
    last: Yup.string().required("Last Name is required").label("Name"),
    first: Yup.string().required("First Name is required").label("Name"),
    number: Yup.string()
      .typeError("That doesn't look like a phone number")
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, "The phone number must be exactly 8 digits")
      .max(8, "The phone number must be exactly 8 digits")

      .required("A phone number is required"),

    email: Yup.string()
      .email("Please enter valid email")
      .required("Email is required")
      .label("Email"),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required")
      .label("Password"),
  });




  function handelSubmit() {
    console.log(firstName, lastName, email, mobilePhone, Password);
    axios.post("http://192.168.11.104:5000/users",{
        id: usersId,
        first_name: firstName,
        last_name: lastName,
        mobile_phone: mobilePhone,
        email: email,
        likes: likes,
        comments: comments,
        hashed_password: Password,
        last_login: lastLogin,
        registred_at: registredAt,
        events_joined: events,
        healthy_food_posted: healthyFoodPosted,
        healthy_food_liked: healthyFoodLiked,
        healthy_food: healthyFood,
        gyms: gyms,
        event_created: eventCreated,
        event_joined_id: eventJoinedId,
        bmi: bmi,
        weight: weight,
        height: height,
        age: age,
        gender: gender,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  let [usersId, setusersId] = useState(0);
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [mobilePhone, setmobilePhone] = useState("0");
  let [Password, setPassword] = useState("");
  let [email, setemail] = useState("");
  let [likes, setlikes] = useState(0);
  let [comments, setcomments] = useState("");
  let [lastLogin, setlastLogin] = useState("");
  let [registredAt, setregistredAt] = useState("");
  let [events, setevents] = useState("");
  let [healthyFoodPosted, sethealthyFoodPosted] = useState("");
  let [healthyFoodLiked, sethealthyFoodLiked] = useState("");
  let [healthyFood, sehealthyFood] = useState("");
  let [gyms, setgyms] = useState("");
  let [eventCreated, seteventCreated] = useState("");
  let [eventJoinedId, seteventJoinedId] = useState(0);
  let [bmi, setbmi] = useState(0);
  let [weight, setweight] = useState(0);
  let [height, setheight] = useState(0);
  let [age, setage] = useState(0);
  let [gender, segender] = useState("");

  return (
    <View style={tw`w-full h-full `}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../assets/images/back.jpg")}
      >
        {/* <ImageBackground source={require('../assets/back.jpg')} /> */}
        <View style={tw`bg-black bg-opacity-60 h-4/5 pt-20`}>
          <View style={tw` h-16  w-4/5 ml-8`}>
            <Image
              style={tw` w-full h-full pl-2 `}
              source={require("../../assets/images/logo.png")}
            />
          </View>

          <View style={tw` items-center `}>
            <Text style={tw`pt-8  text-white font-bold text-2xl`}>
              Create an account{" "}
            </Text>
          </View>

          <View style={tw` mt-8 w-4/5 ml-8   `}>
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2 `}
              placeholder="First name"
              value={firstName}
              onChangeText={setfirstName}
            />
            {/* {errors.first && touched.first && (
                                    <Text style={{ color: 'red' }}>{errors.first}</Text>
                                )} */}
            <TextInput
              style={tw` mt-4 rounded h-10 bg-white p-2 `}
              placeholder="Last name"
              onChangeText={setlastName}
              value={lastName}
            />
            {/* {errors.last && touched.last && (
                                    <Text style={{ color: 'red' }}>{errors.last}</Text>
                                )} */}

            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2 `}
              placeholder="Email"
              onChangeText={setemail}
              value={email}
            />
            {/* {errors.email && touched.email && (
                                    <Text style={{ color: 'red' }}>{errors.email}</Text>
                                )} */}
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2  `}
              placeholder="Phone number"
              keyboardType="numeric"
              onChangeText={setmobilePhone}
              value={mobilePhone}
            />
            {/* {errors.number && touched.number && (
                                    <Text style={{ color: 'red' }}>{errors.number}</Text>
                                )} */}
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2  `}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={setPassword}
              value={Password}
            />
            {/* {errors.password && touched.password && (
                                    <Text style={{ color: 'red' }}>{errors.password}</Text>
                                )} */}
          </View>

          <View style={tw` text-black pt-6 w-4/5 ml-8`}>
            <TouchableOpacity  onPress={()=>handelSubmit()}  style={Styles.button}>
              <Text style={Styles.text}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: "#e7ff19",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
