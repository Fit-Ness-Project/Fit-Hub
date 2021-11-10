import React, { useEffect, useState, useRef } from "react";
import {  View , Text} from "react-native";
import axios from "axios";
import { Events } from "../../screens/Events/interface";



const Test = () => {
    const [OneEvent, setEventData] = useState<Events[]>([]);

// example of get one that will be on a usser 
   const userId= 4
   useEffect(() => {
    axios
      .get(`http://192.168.11.134:5000/events/${userId}`)

      .then((response) => {
        setEventData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

   // post req example 




    return (
    <View>
         {/* {OneEvent.map((item, k) => ( */}
         
        {/* <><Text>{OneEvent.eventName}</Text> */}
        {/* <Text>{OneEvent.adress}</Text></> */}
         {/* ))} */}
    </View>
    )
}


     export default Test;