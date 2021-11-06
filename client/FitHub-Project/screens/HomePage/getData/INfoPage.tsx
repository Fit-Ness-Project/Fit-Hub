import  React , { useState }  from 'react';
import { StyleSheet ,Picker  } from 'react-native';
import { Text, View ,  TouchableOpacity, TextInput } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

const INfoPage = ({ navigation } : RootTabScreenProps<'UserInfo'>) =>{
   const [selectedValue, setSelectedValue] = useState("male");
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
      
      <TouchableOpacity style = {styles.submitButton}>
      <Text  style = {styles.label}>Select Your Gender</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 ,marginLeft:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female " value="Female" />
      </Picker>
         <Text style = {styles.submitButtonText}> Submet </Text>
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
 export default INfoPage;