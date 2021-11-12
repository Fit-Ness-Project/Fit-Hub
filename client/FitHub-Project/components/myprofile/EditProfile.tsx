import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";
import tw from "tailwind-react-native-classnames";

const EditProfile = () => {
  const userId = 0;
  function handelSubmit() {
    axios
      .patch(`http://localhost:5000/users/${userId}`, {
        mobile_phone: Number(mobilePhone),
        email: email,
        hashed_password: Password,
        weight: Number(weight),
        height: Number(height),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  let [mobilePhone, setmobilePhone] = useState("0");
  let [email, setemail] = useState("");
  let [Password, setPassword] = useState("");
  let [weight, setweight] = useState("0");
  let [height, setheight] = useState("0");

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
        value={mobilePhone}
        onChangeText={setmobilePhone}
      />
      <Button onPress={handelSubmit} title="Submit" />
    </View>
  );
};

export default EditProfile;
