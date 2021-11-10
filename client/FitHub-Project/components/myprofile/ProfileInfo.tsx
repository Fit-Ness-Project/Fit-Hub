// import React, { useEffect, useState, useRef } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import axios from "axios";
// import { RouteProp } from "@react-navigation/core";

// const ProfileInfo = () => {
//   const [usersData, setUsersData] = useState<User[]>([]);
//   const [UserData, setUserData] = useState<User[]>([]);


//   useEffect(() => {
//     axios
//       .get(`http://192.168.11.134:5000/user${}`)
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((Error) => {
//         console.log(Error);
//       });
//   }, []);


//   useEffect(() => {
//     axios
//       .get("http://192.168.11.134:5000/users")

//       .then((response) => {
//         setUsersData(response.data);
//       })
//       .catch((Error) => {
//         console.log(Error);
//       });
//   }, []);

//   const User: React.FC<{
//     route: RouteProp<{
//         params:{
//             id: number;
//             first_name: string;
//             last_name: string;
//             mobile_phone: number;
//             email: string;
//             likes: number;
//             comments: string;
//             hashed_password: string;
//             last_login: Date
//             registred_at: Date
//             events_joined: string;
//             healthy_food_posted: string;
//             healthy_food_liked: string;
//             healthy_food: string;
//             gyms: string;
//             event_created: string;
//             event_joined_id: number;
//             bmi: number;
//             weight: number;
//             height: number;
//             age: number;
//             gender: string;
//         }
//     },'params'>
// }> = ({ route: { params } }) =>{ 

//     return (
//         <View>
//           <Text></Text>
//         </View>
//       );
//     };
// }