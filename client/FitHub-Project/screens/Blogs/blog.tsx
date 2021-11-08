import { useEffect, useState, useRef } from 'react'
import { Text, View } from '../../components/Themed';
import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    TextInput,
    Button,
    Alert
} from "react-native";

const Blog: React.FC<{
    route: RouteProp<{
        params: {
            id: number;
            blogTitle: string; 
            imageUrl: string; 
            content: string;
            date: Date;
            comment: string;
            comment_count: Number; 
            like: Number;
        }
    }, 'params'>
}> = ({ route: { params } }) => {

    return (
        <View style={styles.container}>
<Text style={styles.title}>{params.blogTitle}</Text>
<ImageBackground source={{ uri: params.imageUrl }} style={styles.image} >
</ImageBackground>
<Text  style={styles.date}>{params.date}</Text>
<Text style={styles.text} >{params.content}</Text>
        </View>
    )

}



export default Blog



const styles = StyleSheet.create({
    container: {
      
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: "column"
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 430,
        resizeMode: 'cover',
        marginVertical: 10,
        borderRadius: 6,
    },
    title: {
        alignItems: 'center',
        fontSize:32,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
    },
    date:{
        fontSize:15
    }
})






// import React from "react";
// import {
//   Box,
//   HStack,
//   Icon,
//   Text,
//   VStack,
//   StatusBar,
//   Avatar,
//   Image,
//   Input,
//   useColorMode,
//   ScrollView,
//   Pressable,
//   Center,
//   Divider,
//   Button,
//   IconButton,
//   Stack,
//   Link,
//   Hidden,
//   Menu,
// } from "native-base";
// import {
//   AntDesign,
//   Entypo,
//   EvilIcons,
//   Feather,
//   FontAwesome,
//   Ionicons,
// } from "@expo/vector-icons";
// import { RouteProp } from '@react-navigation/native';
// const categories = [
//   {
//     category: "New Born",
//   },
//   {
//     category: "Tiny Baby",
//   },
//   {
//     category: "0-3 M",
//   },
// ];
// const reviews = [
//   {
//     imageUrl:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     name: "Laura Jones",
//     time: "12 May 2021",
//     review:
//       "I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids. I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids. I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.",
//   }
// ];
// const AddToCartButton = (props: any) => {
//   return (
//     <HStack
//       mt="5"
//       space="4"
//       alignItems="center"
//       display={{
//         base: props.base,
//         md: props.md,
//       }}
//     >
//       <Center
//         p="2"
//         borderRadius="4"
//         _light={{ bg: "primary.100" }}
//         _dark={{ bg: "coolGray.900" }}
//       >
//         <Icon
//           size="8"
//           name="heart"
//           as={EvilIcons}
//           _dark={{ color: "violet.500" }}
//           _light={{ color: "primary.900" }}
//         />
//       </Center>
//     </HStack>
//   );
// };
// export default function (props: any) {
//   // const router = useRouter(); //use incase of Nextjs
//   const [tabName, setTabName] = React.useState("Reviews");
//   const { colorMode } = useColorMode();
//   return (
//     <>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="light-content"
//       />
//       <Box
//         safeAreaTop
//         _light={{ bg: "primary.900" }}
//         _dark={{ bg: "coolGray.900" }}
//       />
//       <VStack
//         flex={1}
//         _light={{ bg: "primary.50" }}
//         _dark={{ bg: "customGray" }}
//       >
//         <Box
//           px={{ base: "4", md: "8" }}
//           pt={{ base: "4", md: "3" }}
//           pb={{ base: "5", md: "3" }}
//           borderBottomWidth={{ md: "1" }}
//           _dark={{ bg: "coolGray.900", borderColor: "coolGray.700" }}
//           _light={{
//             bg: { base: "primary.900", md: "white" },
//             borderColor: "coolGray.200",
//           }}
//         >
//           {/* Mobile header */}
//           <Hidden from="md">
//             <HStack space="2" justifyContent="space-between">
//               <HStack space="2" alignItems="center">
//                 <IconButton
//                   variant="ghost"
//                   colorScheme="light"
//                   icon={
//                     <Icon
//                       size="6"
//                       as={AntDesign}
//                       name="arrowleft"
//                       color="coolGray.50"
//                     />
//                   }
//                 />
//                 <Text color="coolGray.50" fontSize="lg">
//                   Body Suit
//                 </Text>
//               </HStack>
//             </HStack>
//           </Hidden>
         
//         </Box>
//         <Box
//           flex={1}
//           flexDirection={{ base: "column", md: "row" }}
//           _light={{
//             borderTopColor: "coolGray.200",
//           }}
//           _dark={{
//             bg: "coolGray.800",
//             borderTopColor: "coolGray.700",
//           }}
//         >
//           <ScrollView
//             flex={1}
//             p={{ md: 8 }}
//             contentContainerStyle={{
//               alignItems: "center",
//               flex: 1,
//             }}
//           >
//             <VStack maxW="1016px" flex={1} width="100%">
//               <Hidden till="md">
//                 <HStack mb="4" space={2}>
//                   <Pressable>
//                     <Icon
//                       size="6"
//                       as={AntDesign}
//                       name={"arrowleft"}
//                       _light={{ color: "coolGray.800" }}
//                       _dark={{ color: "coolGray.50" }}
//                     />
//                   </Pressable>
//                   <Text
//                     fontSize="lg"
//                     _dark={{ color: "coolGray.50" }}
//                     _light={{ color: "coolGray.800" }}
//                   >
//                     Body Suit
//                   </Text>
//                 </HStack>
//               </Hidden>
//               <Stack
//                 flex={1}
//                 p={{ md: "8" }}
//                 _light={{ bg: "white" }}
//                 _dark={{
//                   borderColor: "coolGray.700",
//                   bg: { md: "coolGray.900", base: "coolGray.800" },
//                 }}
//                 borderWidth={1}
//                 borderColor="#E5E7EB"
//                 borderRadius={8}
//                 direction={{ base: "column", md: "row" }}
//                 space="6"
//               >
//                 <Box
//                   p="2"
//                   bg="primary.100"
//                   borderRadius="md"
//                   alignItems="center"
//                   w={{ base: "100%", md: "50%" }}
//                   h={{ base: "40%", md: "auto" }}
//                   pr={{ base: "2", md: "4" }}
//                   justifyContent="center"
//                 >
//                   <Image
//                     width="full"
//                     height={{ base: "full", md: "full" }}
//                     rounded="lg"
//                     alt="Alternate Text"
//                     source={require("../../assets/images/back.jpg")}
//                   />
//                 </Box>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                   <Box flex={1} px={{ base: "4" }}>
                  
//                     <AddToCartButton base="none" md="flex" />
                   
//                     {tabName === "Description" ? (
//                       <Text
//                         mt="3"
//                         fontSize="sm"
//                         lineHeight="lg"
//                         fontWeight="medium"
//                         letterSpacing="0.3"
//                         _light={{ color: "coolGray.800" }}
//                         _dark={{ color: "coolGray.50" }}
//                       >
//                         Yellow bodysuit, has a round neck with envelope detail
//                         along the shoulder, short sleeves and snap button
//                         closures along the crotch.Your Body suit has a round
//                         neck with detail along the shoulder,short sleeves and
//                         snap button closer along the front.
//                       </Text>
//                     ) : (
//                       reviews.map((item: any, idx: number) => {
//                         return (
//                           <VStack my="3" px="4" key={idx}>
//                             <HStack justifyContent="space-between">
//                               <HStack space="3">
//                                 <Avatar
//                                   source={{
//                                     uri: item.imageUrl,
//                                   }}
//                                   height="9"
//                                   width="9"
//                                 />
//                                 <VStack space="1">
//                                   <Text
//                                     fontSize="sm"
//                                     fontWeight="semibold"
//                                     _dark={{ color: "coolGray.50" }}
//                                     _light={{ color: "coolGray.800" }}
//                                   >
//                                     {item.name}
//                                   </Text>
//                                   <HStack space="1">
//                                     <Icon
//                                       size="4"
//                                       name="star"
//                                       as={AntDesign}
//                                       color="amber.400"
//                                     />
//                                   </HStack>
//                                 </VStack>
//                               </HStack>
//                               <Text
//                                 fontSize="sm"
//                                 _light={{ color: "coolGray.500" }}
//                                 _dark={{ color: "coolGray.300" }}
//                               >
//                                 {item.time}
//                               </Text>
//                             </HStack>
//                             <Text
//                               alignItems="center"
//                               lineHeight="lg"
//                               mt="4"
//                               _light={{ color: "coolGray.500" }}
//                               _dark={{ color: "coolGray.300" }}
//                               fontSize="md"
//                             >
//                               {item.review}
//                             </Text>
//                           </VStack>
//                         );
//                       })
//                     )}
//                     <AddToCartButton base="flex" md="none" />
//                   </Box>
//                 </ScrollView>
//               </Stack>
//             </VStack>
//           </ScrollView>
//         </Box>
//       </VStack>
//     </>
//   );
// }