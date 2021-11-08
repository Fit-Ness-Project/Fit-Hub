import * as React from 'react';
import { ScrollView ,StyleSheet ,Text,Image, View,TouchableOpacity } from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
 import tw from "tailwind-react-native-classnames"


import { RouteProp } from '@react-navigation/native';

   const Gym: React.FC<{
        route: RouteProp<{
            params: {
               
               gymName: string,
               imgUrl: string,
               rating: number,
               description: string,
               fields: string,
               price: number ,
            
              latitude :  string;
              longitude :  string;
              adress: string;
              phoneNumber: number;
            }
        }, 'params'>
    }> = ({ route: { params } }) => {
        return (
         <View style={{width:"100%" , height:"100%"}}>
<View style={{width:"100%" ,height:"32%"}}>
  <Image style={{width:"100%" , height:"100%"}}source = {{ uri: params.imgUrl }} />
</View>
<View style={{flexDirection:"row",paddingTop:20,paddingLeft:5}}>
  <Image style={tw`w-5 h-5`} source={require("../../assets/Icons/adress.png")}/>
  <Text style={tw`text-black`}>{params.adress}</Text>
</View>
<View style={{flexDirection:"row",padding:20,fontSize: 20}}>
  <Text style={tw`text-black`}>{params.gymName}</Text>
</View>
<View>
</View>
         </View>
   );
    }

    export default Gym






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "black"
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
  img:{
    width: 350,
    height:400, 
  }
});