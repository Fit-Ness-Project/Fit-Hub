import  React , {useState} from 'react';
import { View,TextInput, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';




export default function Information({}: RootTabScreenProps<'Home'>) {
   const [selectedValue, setSelectedValue] = useState("male");
   const navigation = useNavigation();
  return (
    <View style = {styles.container}> 
    <Text style={styles.title}>Add You Information for us to help You</Text>
    <Text style = {styles.label}>Age </Text>
    <TextInput style= {styles.input} 
    underlineColorAndroid = "transparent"
    placeholder = "Age (year)"
    autoCapitalize = "none" 
    />

    <Text  style = {styles.label}>Height</Text>
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Height (Cm)"
       autoCapitalize = "none"
       />
<Text  style = {styles.label}>Weight</Text>
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Weight (Kg)"
       autoCapitalize = "none"
     />
     <Text  style = {styles.label}>Select Your Gender</Text>
     <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 , backgroundColor:'#e7ff19' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item 
         label="male" value="male"  />
        <Picker.Item 
         label="Female" value="Female" />
      </Picker>
       
    
    <TouchableOpacity
     onPress={() => navigation.navigate("Home")}
       style = {styles.submitButton}
       >
       <Text style = {styles.submitButtonText}> Next </Text>
    </TouchableOpacity>
    <Text style = {styles.resultText}></Text>
    < Text style = {styles.resultText}></Text>
    < Text style = {styles.resultText}></Text>
    </View>
)
  }
const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     
  },
  input: {
     margin: 15,
     height: 40,
     borderWidth: 1,
     padding: 10,
     backgroundColor:'white'
  },
  submitButton: {
     backgroundColor: '#e7ff19',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     textAlign: "center",
     color: 'black',
    // fontWeight:"bold",
     fontSize: 18,

  },
  output:{
     textAlign: "center",
     fontSize: 30,
  },
  title:{
     paddingTop:30,
     paddingBottom:10,
     textAlign: "center",
     fontSize: 30,
     fontWeight:"bold",
  },
  resultText:{
     paddingTop:20,
     paddingBottom:10,
     textAlign: "center",
     fontSize: 30,
     color: 'blue'
  },
  label:{
     marginLeft: 15,
  }
})
