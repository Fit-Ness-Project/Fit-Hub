import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View,  TouchableOpacity, TextInput } from '../components/Themed';


export default function TabOneScreen() {
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
    
    <TouchableOpacity
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
  },
  submitButton: {
     backgroundColor: '#e7ff19',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     textAlign: "center",
     color: 'white',
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
