
import * as  React from 'react';
import { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as _ from "lodash";
import * as Google from 'expo-google-app-auth';
import { LogBox } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { RootTabScreenProps } from "../../types";
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'
LogBox.ignoreLogs(['Remote debugger']);


type MessageType = "SUCCESS" | "FAILED"


// import icon from 'react-native-vector-icons';
export default function Login({ }: RootTabScreenProps<'Home'>) {
    const navigation = useNavigation()
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<MessageType>();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);
    useKeepAwake();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').label('Name'),
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email is required')
            .label('Email'),
        password: Yup.string()
            .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required')
            .label('Password'),
    });
    const handleMessage = (message: string, type: MessageType = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const handleSignin = () => {
        setGoogleSubmitting(true)
        const config = {
            webClient: `274546852331-6fop8qr7e6of6gt5db0g66fp8jmvo39g.apps.googleusercontent.com`,
            iosClientId: `274546852331-u70lh7m0nma8l64ojqgtepjlv8vqoft4.apps.googleusercontent.com`,
            androidClientId: `139390994367-fipsm4r0n6bv2gos62km9arj2p3e8n39.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }
        Google.logInAsync(config)
            .then((result) => {
                const { type } = result;
                if (type === 'success') {
                    // const { user: { email, name, photoUrl } } = result;
                    AsyncStorage.setItem('auth', JSON.stringify(result))
                        .then((result) => {

                            console.log(result)
                            handleMessage('Google signin successful', "SUCCESS");
                            // setTimeout(() => navigation.navigate('bmi'), 1000)
                        })

                }
                else {
                    handleMessage('Google signin ws cancelled')
                }
                setGoogleSubmitting(false);
 
            })
            .catch(error => {
                setGoogleSubmitting(false);

                console.log('hne ', error);
                handleMessage('An error ocured, Check your network and try again')
            })
    };

    return (
        <Formik
            initialValues={{ email: '', password: "" }}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                            <TouchableOpacity
                                // onPress={handleSubmit}
                                onPress={() => navigation.navigate("Home")}
                                style={Styles.button}
                            ><Text style={Styles.text}>Log In</Text></TouchableOpacity>
                        </View>
                        <View style={tw`items-center`}>
                            <Text style={tw`text-white items-center mt-8 `}>Or</Text>
                        </View>

                        <View style={tw`border border-white items-center bg-white mt-8 w-4/5 ml-8 h-8`}>
                            <View style={tw`flex flex-row`} >
                                <Image style={tw`mt-1.5 w-4 pl-2 h-4`} source={require("../../assets/images/GOOGLE.png")} />
                                <Text onPress={handleSignin} style={tw`mt-1 pl-6 font-bold text-black`}>Connect with Google</Text>
                            </View>

                        </View>
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

