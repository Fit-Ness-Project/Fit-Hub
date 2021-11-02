import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, StyleSheet, Image,ScrollView, Dimensions} from "react-native";
import { View } from "../../components/Themed";
import { Avatar, Button, Card, Title, Paragraph,Colors } from 'react-native-paper';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';



// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from "../../components/Themed";

export default function GymsScreen() {
  return (
    
    <MapView
    style={{ flex: 1 }}
    provider={PROVIDER_GOOGLE}
    showsUserLocation
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
  />
//     <ScrollView >
 
//  <Card style = {{marginTop:4 }}>
//     <Card.Cover  source={image} />
//     <Card.Content>
//       <Title>California Gym</Title>
//       <Paragraph>Card content adazdazdazdadazkhbazjdazzauda azjdnhzadnhazdazdju judzadjuazudabzudgbazud uazgbduazbduiazbidbazubdjuazjudazuibd iazuduazudbaziukbduaz baziudbui</Paragraph>
//     </Card.Content>
//     <Card.Actions>
//       <Button color = "blue">See More</Button>
//       <Button color = "blue">Remove</Button>
//     </Card.Actions>
//   </Card>
// </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
  // image : {
  //   width : 400,
  //   height :200,   
  // },
  // boxes : {
  //   border : "solid",
  //   borderColor : "	#ffffff",
  //   backgroundColor : "	#ffffff",
  //   width : 360,
  //   height : 200,
  // marginTop: 2,
  //   borderRadius : 8
  // },
   map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
