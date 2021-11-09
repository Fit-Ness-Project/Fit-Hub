
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



export default function Login({ }: RootTabScreenProps<'Home'>) {







    
    const navigation = useNavigation()
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<MessageType>();
    const [boolean, setboolean] = useState(false)
    const [navigate, setNavigate] = useState(false)
    const [googleSubmitting, setGoogleSubmitting] = useState(false);
    const [loginSubmitting, setLoginSubmitting] = useState(false);
    const [token, setToken] = useState("")
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
            iosClientId: `196418584285-c63js4737tou3b1l8m0gtulpduial66a.apps.googleusercontent.com`,
            androidClientId: `196418584285-13csvmvh90m2bbl7aiqmqg654vhbtf0o.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }
        Google.logInAsync(config)
            .then((result) => {
                const { type } = result;
                if (type === 'success') {
                    const { user: { email, name, photoUrl } } = result;
                    AsyncStorage.setItem('auth', JSON.stringify(result))
         
                        .then((result) => {
                            console.log(result)
                            handleMessage('Google signin successful', "SUCCESS");
                             setTimeout(() => navigation.navigate('Home'), 1000)
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

           function handleLogin() {
            setGoogleSubmitting(true)
        const config = {
            iosClientId: `196418584285-c63js4737tou3b1l8m0gtulpduial66a.apps.googleusercontent.com`,
            androidClientId: `196418584285-13csvmvh90m2bbl7aiqmqg654vhbtf0o.apps.googleusercontent.com`,
            // webClient: `274546852331-6fop8qr7e6of6gt5db0g66fp8jmvo39g.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        };



        Google.logInAsync(config)
            .then((result) => {
                const { type } = result;
                if (type === 'success') {
                    const {user: {email, name, photoUrl } } = result;
                    axios.post(`http://localhost:5000/users`, {
                        name: name, email: email, photo: photoUrl
                    }).then((response) => {
                        console.log(response.data)
                        AsyncStorage.setItem("auth", response.data.Token)
                      
                            .then((response) => {
                                navigation.navigate("Home");
                                setGoogleSubmitting(false)
                            }).catch((error) => {
                                console.log(error);
                            });
                    })
                        .catch((error) => {
                            console.log(error);
                              setGoogleSubmitting(false)
                        });
                }


            });

    }


    return (

        <Formik
            initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
            onSubmit= {(values,{ setSubmitting}) => {
             console.log(values);
             navigation.navigate('Home')
            if(values.email !== '' || values.password !== '' ){
               handleLogin()  
            }else setSubmitting(false)
            }}
        >
            {({ handleChange ,handleBlur, handleSubmit,isSubmitting, values, errors, touched }) => (
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
                          onPress={()=>handleLogin}
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
                             <ActivityIndicator size="large"  />
                            </TouchableOpacity>
                            }
                        </View>
                        <View style={tw`items-center`}>
                            <Text style={tw`text-white items-center mt-8 `}>Or</Text>
                        </View>
                        {!googleSubmitting && (
                        <TouchableOpacity     onPress={handleSignin} >
                        <View style={tw`border border-white items-center bg-white mt-8 w-4/5 ml-8 h-8`}>
                            <View style={tw`flex flex-row`} >
                            {boolean ?
                       <ActivityIndicator color="#D9AF91" size="large" style={{ alignSelf: "center" }} />
                           :
                                <><Image style={tw`mt-1.5 w-4 pl-2 h-4`} source={require("../../assets/images/GOOGLE.png")} /><Text style={tw`mt-1 pl-6 font-bold text-black`}>Connect with Google</Text></>
                            } 

                            </View>
                           
                        </View>
                        </TouchableOpacity>
                        ) }
                         {/* {googleSubmitting && (
                      <TouchableOpacity
                      disabled={true}
                              
                          >
                           <ActivityIndicator size="large"  />
                          </TouchableOpacity>
                        ) } */}
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






// const [boolean, setboolean] = useState(false)
// const [navigate, setNavigate] = useState(false)
// const [spinner, setSpinner] = useState(false)
// const [phone, setPhone] = useState("5")
// const [erorr, setErorr] = useState(false)
// const [erorr1, setErorrPhone] = useState(false)
// const [check, setCheck] = useState(false)
// const [codeVerfication, setCodeVerfication] = useState('')
// const [token, setToken] = useState("")


// useEffect(() => {
//   AsyncStorage.getItem('auth').then((data) => {
//     if (data !== null) {
//        navigation.navigate('Main')
//       return;
//       }
//   })
// }, [])

// let handleLoinWithPhone = function () {
//    if(phone["e"] ==null|| phone["e"].length !==8){
//       setCheck(true)
//       return 
//    }   
//   else if(phone["e"].length ==8){
//     setCheck(false)
//   }
//   setSpinner(true)
//   console.log(phone["e"])
//   axios
//     .post(`https://haunted-cat-69690.herokuapp.com/users/send/${phone["e"]}`).then((res) => {
      
//       setCodeVerfication(res.data.verifCode)

//       AsyncStorage.setItem("phoneVerife", JSON.stringify(res.data))
//       setErorrPhone(false)
//       setNavigate(true)
//       setSpinner(false)
    
   
//      return ;
//     }).catch((err) => {
//       console.log(err)
//       setNavigate(false)
//       setSpinner(false)
//       setErorrPhone(true)
//       return 
//     })


// }



// let st = check == false ? 'black' : 'red'
// let handleLogin = async function () {
//   setboolean(true)
//   const config = {
//     iosClientId: `741420364536-suf5j1kib19o0nfl1h9cqco18eou6r0u.apps.googleusercontent.com`,
//     androidClientId: `741420364536-f3glchvm0p8qt5nkkhsv7rnbgec6op8i.apps.googleusercontent.com`,
//     androidStandaloneAppClientId: '759598068494-hg5cakbf3gpfntdoaasqi0a8dqd6r9j9.apps.googleusercontent.com',
//     scopes: ['profile', 'email']
//   }
//   try {
//     const dataFromGoogle = await Google.logInAsync(config)
//     const { type, user } = dataFromGoogle
//     if (type == 'success') {


//       const { email, name, photoUrl } = user
//       axios.post(`https://haunted-cat-69690.herokuapp.com/users`, {
//         name: name, email: email, photo: photoUrl
//       }).then((response) => {
//         AsyncStorage.setItem("auth", response.data.Token).then((response_) => {
//           navigation.navigate("Main")
//           setboolean(false)
//         }).catch((error) => {
//           console.log(error)
//         })
//       }).catch((error) => {
//         console.log(error)
//       })

//     }

//   } catch (e) {
//     console.error(e)
//     setboolean(false)
//     setErorr(true)
//   }
// }


// return (
//   <


//           
//                
//                       {spinner ?
//                         <ActivityIndicator />
//                         : <>

//                           <Text onPress={handleLoinWithPhone} style={{ color: "white" }}>LOG IN</Text>
//                         </>
//                       }

            

//                     </View>
//                   </View>
//                   {erorr1 ? <Text style={{ color: "red" }}>An error occurred.check your Network and try again </Text> : (<Text></Text>) && false}


//              
//               <Text style={{ color: "white" }}>or</Text>
//         
//               <TouchableOpacity onPress={handleLogin}>
//                

//                     {boolean ?
//                       <ActivityIndicator color="#D9AF91" size="large" style={{ alignSelf: "center" }} />
//                       : <>
//                         <Image style={{
//                           resizeMode: "contain",
//                           height: 20,
//                           width: 30
//                         }} source={require("../../../assets/Google_icon-icons.com_66793.png")} />
//                         <Text  >Google</Text>
//                       </>
//                     }




//   </>
// );


