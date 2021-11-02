import  { useEffect, useState , useRef } from 'react'
import { Text, View} from '../Themed';
import * as React from 'react';
import {Coach} from "./interface";
import axios from "axios";

import { StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    TextInput
} from "react-native";

// const {width , height} = Dimensions.get('window')
const viewConfigRef = {viewAreaCoveragePercentTreshold:95}

export default function AllCoachs() {

let flatListRef = useRef<FlatList<Coach> | null >();

// const [currentIndex, setCurrentIndex] = useState(0);

const [coachData, setCoachData] = useState<Coach[]>([]);

const [searchData, setSearchData] = useState<Coach[]>([]);

// const onViewRef= useRef(({changed}:{changed:any})=> {
//     if(changed[0].isViewable){
//         setCurrentIndex(changed[0].index);
//     }
// });   

useEffect(() => {
    axios 
    .get('http://192.168.11.19:5000/coachs')
     
    .then((response)=> {
       
        setCoachData(response.data)
        setSearchData(response.data)
    })
    .catch(( Error) => {
      console.log(Error);
    });

}, [])




const scrollToIndex = (index:number) => {
    flatListRef.current?.scrollToIndex({animated: true, index: index})
}

const renderItems: React.FC<{item:Coach}> = ({item})=> {
 return <TouchableOpacity onPress={()=> console.log(item)}
 activeOpacity={1} >
    <Image source={{uri: item.imageUrl}} style={styles.image}  />
    <View style={styles.footer} >
        <Text  style={styles.footerText}  >{item.coachName} </Text>
        <Text  style={styles.footerText}  >{item.price} TND</Text>
    </View>
 </TouchableOpacity>
}

const ItemView: React.FC<{item:Coach}> = ({item}) => {
    return (
        <Text>
            {item.coachName.toUpperCase()}
        </Text>
    )
}
const ItemSeparatorView = () => {
    return (
        <View />

     
    )
}
return (
 
    <View  style={styles.container}>
        {/* <View>
            <TextInput
            // value={search}
            />
   <FlatList  data={searchData}
    keyExtractor={(item,i)=> i.toString()}
    ItemSeparatorComponent={ItemSeparatorView}
    renderItem={ItemView}
   />
   </View> */}
       <StatusBar   />
       <Text  style={styles.title} >Available Coachs  </Text>
         
        <FlatList data={coachData}
         renderItem={renderItems} 
         keyExtractor={(item,i)=> i.toString()}
         showsHorizontalScrollIndicator={false}
        //  pagingEnabled 
         ref={(ref)=>{flatListRef.current = ref}}
         style= {styles.carousel}
         viewabilityConfig= {viewConfigRef}
        //  onViewableItemsChanged={onViewRef.current}
          />
          <View style= {styles.dotview}>
              {coachData.map(({},index:number)=> (
                  <TouchableOpacity key={index.toString()} 
                //    style={[styles.circle,
                // {backgroundColor : index == currentIndex ? 'black': 'grey'}
                // ]} 
                onPress={()=> scrollToIndex(index)}
                  >

                  </TouchableOpacity>
              ))}
          </View>
       </View>
 )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      image:{
        width: 350 ,
        height: 230 ,
        resizeMode: 'cover' ,
        marginVertical : 10 ,
      },
      footer:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        height: 50 ,
        paddingHorizontal: 50,
        alignItems : 'center',
        backgroundColor: '#000' ,
      },
      footerText:{
       color: '#fff' ,
       fontSize: 18 ,
       fontWeight: 'bold',
      },
      carousel:{
          maxHeight: 300
      },
      dotview:{
        flexDirection : 'row',
        justifyContent: 'center',
        marginVertical : 20 ,
      },
      circle:{
          width:10,
          height:10,
          backgroundColor: "grey",
          borderRadius: 50,
      },
      title:{
          color: 'white',
     
        fontSize: 25 ,
        fontWeight: 'bold', 
        backgroundColor: "black"
      }

})