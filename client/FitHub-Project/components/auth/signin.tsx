
import * as  React from 'react';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Image, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import * as _ from "lodash";
import * as Google from 'expo-google-app-auth';
import { LogBox } from 'react-native';
// import { useKeepAwake } from 'expo-keep-awake';
import { RootTabScreenProps } from "../../types";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



LogBox.ignoreLogs(['Remote debugger']);
type MessageType = "SUCCESS" | "FAILED"



export default function Login({ }: RootTabScreenProps<'Home'>) {


  const navigation = useNavigation()

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<MessageType>();

  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [loginSubmitting, setLoginSubmitting] = useState(false);


  // useKeepAwake();
  // const validationSchema = Yup.object().shape({
  //     name: Yup.string().required('Name is required').label('Name'),
  //     email: Yup.string()
  //         .email('Please enter valid email')
  //         .required('Email is required')
  //         .label('Email'),
  //     password: Yup.string()
  //         .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
  //         .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //         .required('Password is required')
  //         .label('Password'),
  // });


  
  const handleGoogleSignIn = () => {
    setGoogleSubmitting(true);
    const config = {
        iosClientId: `139390994367-ovh7mn3b3gjgqlustn50p2n12pdflb4r.apps.googleusercontent.com`,
        androidClientId: `139390994367-do2jpfprao629c268pg3u95m2c7k2vrn.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };



    Google.logInAsync(config)
      .then((result) => {
        const { type } = result;
        if (type === "success") {
          const { user: { email, name, photoUrl } } = result;
          handleMessage("Google sign in successful", "SUCCESS");
      console.log(result.user)
            navigation.navigate("Home")
        
       
        } else {
          handleMessage("Google signin was cancelled");
        }
        setGoogleSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        handleMessage("An Errr occured . check your Network and try again");
        setGoogleSubmitting(false);
      });
  };



  const handleMessage = (message: string, type: MessageType = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  }


  const handleLogin = (credentials: { email: string; password: string; }) => {
    console.log("credentials", credentials)

    axios.post('http://192.168.11.104:5000/customer/login', credentials)
      .then((res) => {
        console.log("token", res.data.Token)
        const result = res.data
        const { message, status, data } = result
        if (status === "SUCCESS") {
          AsyncStorage.setItem('Token', res.data.Token)
          navigation.navigate('Home', data[0])
        } else {
          handleMessage(message, status)
          console.log("Something went wrong !")
        }


      }).catch(
        err =>{ console.log(err),
        handleMessage("Try Again")
      })
    }




  return (
    <Formik
      initialValues={{ email: '', password: "" }}
      // validationSchema={validationSchema}

      onSubmit={(values, { setSubmitting }) => {
        console.log("values:", values);

        if (values.email == '' || values.password == '') {

          handleMessage("Please fill all the fields")
          setSubmitting(false)

        } else {

          handleLogin(values)
           navigation.navigate('Home')
        }
      }}

    >
      
      {({ handleChange, handleBlur, handleSubmit, isSubmitting, values, errors, touched }) => (
        <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/back.jpg")}>


          <View style={tw` bg-black bg-opacity-60 h-4/5 pt-20 items-center`}>
            <View style={tw` h-16  w-4/5 `} >
              <Image style={tw` w-full h-full `} source={require("../../assets/images/logo.png")} />
            </View>

            <View style={tw` items-center `}>

              <Text style={tw` pt-16 text-white font-bold text-2xl`} >Log In to FitHub </Text>
            </View>


            <View style={tw` mt-10 w-4/5  flex `}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={tw` h-10 bg-white p-2`}
                placeholder="E-mail@mail.com"
                autoCompleteType="email"
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}
              <TextInput
                style={tw`mt-4 h-10 bg-white p-2 `}
                secureTextEntry={true}
                placeholder="* * * * * * * *"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              )}
            </View>



            <View style={tw`  pt-4 w-4/5`}>
              {!isSubmitting &&

                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  // onPress={() => navigation.navigate("Home")}
                  style={Styles.button}
                >

                  <Text style={Styles.text}>Login</Text>

                </TouchableOpacity>
              }
              {isSubmitting &&
                <TouchableOpacity
                  disabled={true}
                  style={Styles.button}
                >
                  <ActivityIndicator size="large" color="white" />
                </TouchableOpacity>
              }
            </View>

            <Text style={tw`text-white mt-8`}>Or</Text>


            <Text onPress={handleGoogleSignIn}
              style={{ color: "black", fontWeight: "500", backgroundColor: "white", width: "80%", height: "8%", paddingLeft: 130, paddingTop: 5 }}

            >
              <Image
                style={{ height: 20, width: 60 }}
                source={require("../../assets/images/ggl.png")}

              />
            </Text>


            <View style={tw`h-10 mt-6 items-center`}>
              <Text style={tw`text-white  pl-6 pt-4`}>
                Don't have an account ? <Text onPress={() => navigation.navigate("register")} style={tw`text-blue-400 underline`}>Register</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      )}
    </Formik>
  )
};



const Styles = StyleSheet.create({
  button: {
    backgroundColor: "#e7ff19",
    alignItems: "center",
    opacity: .8,
    height: 45

  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "2%"

  }
})




