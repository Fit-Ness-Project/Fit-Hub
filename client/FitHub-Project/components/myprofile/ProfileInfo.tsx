import React, {useState ,useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { RouteProp } from "@react-navigation/core";
import { Profile } from "./interface";
const ProfileInfo = () => {

    const [ProfileData, setProfileData] = useState<Profile[]>([]);

    const userId = 0;
    useEffect(()=>{
        axios.get(`http://localhost:5000/users${userId}`,{
        }).then((res)=>
        setProfileData(res.data)
        
        )
        .catch((err)=>console.log(err)
        )
    },[]) 
    

    return (
        <View>
          <Text></Text>
        </View>
      );
    };