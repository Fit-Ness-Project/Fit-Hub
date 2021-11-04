import * as React from 'react';
import { Text , View} from '../../../../components/Themed';
import { Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames'
import { width } from '@mui/system';

export default function MyProfile() {
  return (
   <SafeAreaProvider>
     {/* my profile car view start here */}
     <View style={tw` flex flex-row  h-full`}>

<View style={tw`w-3/12 flex flex-col`}>
  <View style={tw`h-3/6 `}>
  <Text>My Profile</Text>
<Card style = {{ width:150,height:50}}>
<Card.Content>
<Title>user Name</Title>
<Paragraph>My Profile</Paragraph>
</Card.Content>
{/* profile picture will be here */}
<Card.Cover  source={{ uri: 'https://picsum.photos/700' }} />
</Card>
  </View>
  <View style={tw`h-1/6 `}>
  <Text>Events</Text>

</View>
</View>
 </View>
 </SafeAreaProvider>
)
  }
