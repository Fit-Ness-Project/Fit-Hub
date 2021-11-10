
import * as  React from 'react';
import { useEffect, useState } from 'react';
import { View,ActivityIndicator , Image, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as _ from "lodash";
import * as Google from 'expo-google-app-auth';
import { LogBox } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { RootTabScreenProps } from "../../types";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
LogBox.ignoreLogs(['Remote debugger']);


type MessageType = "SUCCESS" | "FAILED"


// import icon from 'react-native-vector-icons';
export default function Login({}: RootTabScreenProps<'Home'>) {


   const navigation = useNavigation()

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<MessageType>();
   
    const [googleSubmitting, setGoogleSubmitting] = useState(false);
    // const [loginSubmitting, setLoginSubmitting] = useState(false);
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
        webClient: `196418584285-2lkuc7ip8msroi9eddku0r82asi9v9n5.apps.googleusercontent.com`,
        iosClientId: `196418584285-c63js4737tou3b1l8m0gtulpduial66a.apps.googleusercontent.com`,
        androidClientId: `196418584285-13csvmvh90m2bbl7aiqmqg654vhbtf0o.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type } = result;
        if (type === "success") {
        const{ user: { email, name, photoUrl }} = result;
          handleMessage("Google sign in successful", "SUCCESS");
          setTimeout(
            () => navigation.navigate("Home"),
            10000
          );
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




     const handleLogin = (credentials: { email: string; password: string; }, setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void; }) => {
        handleMessage("null")
       axios.post('http://192.168.11.65:5000/users', credentials)
         .then((response)=> {
            const result = response.data
           console.log('user',result)
            const {message, status, data} = result
          if(status !== "SUCCESS"){
                  handleMessage(message, status)
           }else {
               navigation.navigate('Home', {...data[0]})
               }
              setSubmitting(false)
        })
        .catch(error=> {
            console.log(error.JSON());
            setSubmitting(false)
           handleMessage("Try Again")
        })
 }

    return (
        <Formik
            initialValues={{ email: '', password: "" }}
            // validationSchema={validationSchema}
            
            onSubmit= {(values,{ setSubmitting}) => {
             console.log(values);
            //  navigation.navigate('Home')
             if(values.email == '' || values.password == '' ){
                handleMessage("Please fill all the fields")
                setSubmitting(false)
               
              }else { handleLogin(values, setSubmitting)  }
            }}
          
        >
            {({ handleChange, handleBlur, handleSubmit,isSubmitting, values, errors, touched }) => (
                <ImageBackground style={tw`w-full h-full`} source={require("../../assets/images/back.jpg")}>


                    <View style={tw` bg-black bg-opacity-60 h-4/5 pt-20`}>
                        <View style={tw` h-16  w-4/5 ml-8`} >
                            <Image style={tw` w-full h-full pl-2 `} source={require("../../assets/images/logo.png")} />
                        </View>

                        <View style={tw` items-center `}>

                            <Text style={tw` pt-16 text-white font-bold text-2xl`} >Log In to FitHub </Text>
                        </View>


                        <View style={tw` mt-10 w-4/5 ml-8 flex `}>
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={tw` h-10  bg-white p-2`}
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



                        <View style={tw`  pt-4 w-4/5 ml-8`}>
                            {!isSubmitting &&

                              <TouchableOpacity
                              onPress={()=>handleSubmit()}
                                // onPress={() => navigation.navigate("Home")}
                                style={Styles.button}
                            >
                           
                                <Text style={Styles.text}>Log In</Text>
                           
                            </TouchableOpacity>
                            }
                             {isSubmitting &&
                              <TouchableOpacity
                        disabled={true}
                                style={Styles.button}
                            >
                             <ActivityIndicator size="large" color="white"  />
                            </TouchableOpacity>
                            }
                        </View>
                        <View style={tw`items-center`}>
                            <Text style={tw`text-white items-center mt-8 `}>Or</Text>
                        </View>
                        <TouchableOpacity onPress={handleGoogleSignIn}>
                        <View style={tw`border border-white items-center bg-white mt-8 w-4/5 ml-8 h-8`}>
                            <View style={tw`flex flex-row`} >
                           
                                <Image style={tw`mt-1.5 w-4 pl-2 h-4`} source={require("../../assets/images/GOOGLE.png")} />
                                <Text  style={tw`mt-1 pl-6 font-bold text-black`}>Connect with Google</Text>
                               
                            </View>

                        </View>
                        </TouchableOpacity>
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
        padding: 10,
        opacity: .8

    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,


    }
})






// const [isOpen, setIsOpen] = React.useState(false);
//   const [message, setMessage] = useState();
//   const [messageType, setMessageType] = useState();
//   const [googleSubmitting, setGoogleSubmitting] = useState(false);
//   const handleMessage = (message, type = "FAILED") => {
//     setMessage(message);
//     setMessageType(type);
//   };





//   const handleGoogleSignIn = () => {
//     setGoogleSubmitting(true);
//     const config = {
//       iosClientId: `215341427022-haijkikj7ejpthac9sld1ihejeouoj06.apps.googleusercontent.com`,
//       androidClientId: `215341427022-eosmagesimfkte0p4b84ci77t6b7m6o2.apps.googleusercontent.com`,
//       androidStandaloneAppClientId: `215341427022-ktifsf6rj56ubln7ddtac012o0s4rlb5.apps.googleusercontent.com`,
//       scopes: ["profile", "email"],
//     };
//     Google.logInAsync(config)
//       .then((result) => {
//         const { type, user } = result;
//         if (type === "success") {
//           const { email, name, photoUrl } = user;
//           handleMessage("Google sign in successful", "success");
//           setTimeout(
//             () => props.navigation.navigate("WhyUs", { email, name, photoUrl }),
//             100
//           );
//         } else {
//           handleMessage("Google signin was cancelled");
//         }
//         setGoogleSubmitting(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         handleMessage("An Errr occured . check your Network and try again");
//         setGoogleSubmitting(false);
//       });
//   };

