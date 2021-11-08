import * as  React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View} from '../Themed'
import { Card, Title, Paragraph , Button } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const myprofile = () => {
    return (
        <SafeAreaProvider>
     {/* my profile car view start here */}
     <View style={tw` flex flex-row  h-full `}>

<View style={tw`w-5/12 flex flex-col `}>
  <View style={tw`h-3/6 bg-red-300 rounded-2xl mt-8`}>
  <Text style={tw`text-center text-lg`}>My Profile</Text>
  {/* <Image  source={require("../../assets/Icons/bell.jpg")} /> */}
<Card style = {{ width:150,height:50}}>
{/* <Card.Content> */}
{/* <Title>DhaferHmidi</Title> */}

<Button>Edit</Button>
{/* <Paragraph> 22 y o Full Stuck JS freshly graduated </Paragraph> */}
{/* </Card.Content> */}
{/* profile picture will be here */}
{/* <Card.Cover  source={{ uri: 'https://miro.medium.com/fit/c/262/262/0*XwNVrhNAsKXkRo8l' }} /> */}
{/* <Button>Modfidy</Button> */}
</Card>
  </View>
  <View style={tw`h-3/6 `}>
  <Text style={tw`text-center text-lg`}>Events</Text>
  <Text>Events list will be here</Text>
<View style={tw`h-2/6 bg-yellow-900 rounded-3xl`}>
  <Text style={tw`text-center text-lg`}>Gyms</Text>
<Text>Gyms will be here</Text>

</View>
</View>
</View>


{/* right vue */}
<View style={tw`w-7/12 flex flex-col mt-8 bg-red-500 rounded-3xl`}>
{/* <View style={tw`h-2/6  rounded-3xl`}>
<Text style={tw`text-center text-lg`}>Blogs here</Text>
<Text>Blogs here</Text> */}


{/* </View> */}
<View style={tw`h-1/6 bg-red-500   rounded-3xl`}>

<Text style={tw`text-center text-lg`}>Food here</Text>
<Text>Food liked here</Text>
 
 <Text>liked</Text>
</View>
<View style={tw`h-2/6 bg-yellow-500 rounded-3xl`}>
<Text style={tw`text-center text-lg`}>Coach here</Text>


</View>
<View style={tw`h-2/6 bg-yellow-200 rounded-3xl`}>
<Text style={tw`text-center text-lg`}>BMI here</Text>


</View>


  </View>
 </View>
 </SafeAreaProvider>
    )
}

export default myprofile

const styles = StyleSheet.create({})
