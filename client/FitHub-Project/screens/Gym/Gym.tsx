import * as React from 'react';

import  { StyleSheet , Dimensions } from 'react-native';
import Map from "../../components/Gyms/Map"
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Gyms from "../../components/Gyms/Gyms"


import EditScreenInfo from '../../components/EditScreenInfo';



import { RootTabScreenProps } from '../../types';

export default function GymScrean() {
  return (

    
   <View style={{width:'100%', height:'100%'}}>
   <Map ></Map>
   <View style={{width:'100%', height:'65%'}}>
     {/* <View style = {{width : '100%' , height : "100%"}}> */}
       <Gyms/>

     {/* </View> */}
     
   </View>
   
</View>
)
  }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:'red',
   },
   title: {
     fontSize: 20,
     fontWeight: 'bold',
   },
   separator: {
     marginVertical: 30,
     height: 1,
     width: '80%',
   },
   body: {
     flex: 9,
     height: 200,
     width: '80%',
     backgroundColor:'green',
   },
   navigation: {
     flex : 2,
     marginVertical: 30,
     height: 1,
     width: '80%',
     backgroundColor:'yellow',
   },
   test : {width:'100%',
    height:'30%'}
 });

  <View >
     <Text >
        Gyms hear
     </Text>
  </View>
)
  }

