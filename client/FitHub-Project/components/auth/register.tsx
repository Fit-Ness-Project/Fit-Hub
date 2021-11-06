import * as React from "react";
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
import * as _ from "lodash";
export default function Register() {
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
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        first: "",
        last: "",
        number: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, values, errors, touched }) => (
        <View style={tw`flex:1, w-full h-full `}>
          <ImageBackground
            style={tw`w-full h-full`}
            source={require("../../assets/images/back.jpg")}
          >
            <View style={tw`flex:1, bg-black bg-opacity-60 h-4/5 pt-20`}>
              <View style={tw` h-16  w-4/5 ml-8`}>
                {" "}
                <Image
                  style={tw` w-full h-full pl-2 `}
                  source={require("../../assets/images/logo.png")}
                />
              </View>
              <View style={tw`flex items-center `}>
                <Text style={tw`pt-20  text-white font-bold text-2xl`}>
                  Sign Up to your account{" "}
                </Text>
              </View>
              <View style={tw` mt-16 w-4/5 ml-8 flex  `}>
                <TextInput
                  style={tw`mt-4 rounded h-10 bg-white p-2 flex`}
                  placeholder="First name"
                  onChangeText={handleChange("first")}
                  onBlur={handleBlur("first")}
                  value={values.first}
                />
                {errors.first && touched.first && (
                  <Text style={{ color: "red" }}>{errors.first}</Text>
                )}
                <TextInput
                  style={tw` mt-4 rounded h-10 bg-white p-2 flex`}
                  placeholder="Last name"
                  onChangeText={handleChange("last")}
                  onBlur={handleBlur("last")}
                  value={values.last}
                />
                {errors.last && touched.last && (
                  <Text style={{ color: "red" }}>{errors.last}</Text>
                )}
                <TextInput
                  style={tw`mt-4 rounded h-10 bg-white p-2 flex`}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}
                <TextInput
                  style={tw`mt-4 rounded h-10 bg-white text-pl-4 p-2 flex `}
                  placeholder="Phone number"
                  keyboardType="numeric"
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  value={values.number}
                />
                {errors.number && touched.number && (
                  <Text style={{ color: "red" }}>{errors.number}</Text>
                )}
                <TextInput
                  style={tw`mt-4 rounded h-10 bg-white p-2 flex `}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
              </View>
              <View style={tw` text-black pt-6 w-4/5 ml-8`}>
                <TouchableOpacity style={Styles.button}>
                  <Text style={Styles.text}>REGISTER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}
const Styles = StyleSheet.create({
  button: {
    backgroundColor: "#E7FF19",
    alignItems: "center",
    padding: 10,
    opacity: 0.8,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
