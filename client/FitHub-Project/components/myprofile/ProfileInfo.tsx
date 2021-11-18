import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView, Text, Platform
} from "react-native";
import axios from "axios";
import tw from "tailwind-react-native-classnames";
import { Profile } from "./interface";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';




const ProfileInfo = () => {


  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };












  const [ProfileData, setProfileData] = useState<Profile[]>([]);
  const navigation = useNavigation()
  const userId = 3;
  console.log(setProfileData)
  useEffect(() => {
    axios.get(`https://fithub-tn-app.herokuapp.com/users/${userId}`, {
    }).then((res) =>
      setProfileData(res.data)
    )
      .catch((err) => console.log(err)
      )

  }, [])

  const seemoreinfo = [<TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
        width: "80%",
        height: "auto",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={require("../../assets/Icons/bmi.png")}
      ></Image>
      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "column",
          width: "100%",
        }}
      >

        <Text style={tw` ml-6  text-black`}></Text>
        <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
          BMI
        </Text>
      </View>
    </View>
  </TouchableOpacity>,
  <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
        width: "80%",
        height: "auto",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={require("../../assets/Icons/kg.png")}
      ></Image>
      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text style={tw` ml-6  text-black`}></Text>
        <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
          Weight
        </Text>
      </View>
    </View>
  </TouchableOpacity>,
  <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
        width: "80%",
        height: "auto",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={require("../../assets/Icons/height.png")}
      ></Image>
      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text style={tw` ml-6  text-black`}>  </Text>
        <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
          Height
        </Text>
      </View>
    </View>
  </TouchableOpacity>,
  <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
        width: "80%",
        height: "auto",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={require("../../assets/Icons/age.png")}
      ></Image>
      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text style={tw` ml-6  text-black`}></Text>
        <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
          Age{ProfileData[0]}
        </Text>
      </View>
    </View>
  </TouchableOpacity>]
  const [verif, setVerif]: any = useState(false)
  const [see, setSee]: any = useState("See More")

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw` h-full w-full bg-white  items-center`}>


          <View
            style={{
              height: 700,
              backgroundColor: "transparent",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                height: 250,
                backgroundColor: "black",
              }}
            >
              <View style={tw` h-16 w-44 absolute z-20 mt-36 bg-black opacity-50 `}></View>
              <TouchableOpacity style={{ position: "absolute", zIndex: 50, paddingTop: 155 }} onPress={() => pickImage()} >
                <Image
                  style={tw`w-8 h-8`}
                  source={require("../../assets/Icons/photo-camera.png")}
                />


              </TouchableOpacity>

              <View style={tw`mt-4 bg-transparent  flex-row`}>
                {/* <Text style={tw`text-white text-base font-bold `}> */}
                {image === null && <Image source={require("../../assets/images/profile.png")} style={{ width: 180, height: 180, borderRadius: 90 }} ></Image>}
                {image && <Image source={{ uri: image }} style={{ width: 180, height: 180, borderRadius: 90 }} ></Image>}

                {/* </Text> */}
              </View>
              <View style={tw`mt-4 bg-transparent flex-row`}>
                <Image
                  style={tw`w-4 h-4`}
                  source={require("../../assets/Icons/pin.png")}
                />
              </View>
            </View>
            <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "white",
                  width: "80%",
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../assets/Icons/phone.png")}

                ></Image>
                <View
                  style={{
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Text style={tw` ml-6  text-black`}></Text>
                  <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                    Mobile
                  </Text>
                </View>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "white",
                  width: "80%",
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../assets/Icons/email.png")}
                ></Image>
                <View
                  style={{
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Text style={tw`ml-6  text-black`}>
                  </Text>
                  <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                    Personal email
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {verif && (seemoreinfo[0])}
            {verif && (seemoreinfo[1])}
            {verif && (seemoreinfo[2])}
            {verif && (seemoreinfo[3])}
            <View style={styles.container}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View>
            <View style={tw`bg-transparent mt-6`}>
              <TouchableOpacity>
                <Text onPress={() => { if (verif === false) { setVerif(true); setSee("Show Less") } else { setVerif(false); setSee("See More") } }} style={tw`text-black underline`}>{see}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={tw` mt-3 h-4 w-4`}
                    source={require("../../assets/Icons/edit.png")}
                  />
                  <Text style={tw`pt-3 pl-2 text-white font-bold`} >Edit Profile</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { marginLeft: 20 }]} onPress={() => navigation.navigate("createEvent")}>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={tw` mt-3 h-4 w-4`}
                    source={require("../../assets/Icons/plus.png")}
                  />
                  <Text style={tw`items-center pt-3 pl-1 text-white font-bold`}>Create Event</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Root")} style={{ marginRight: 140 }} >
              <View style={{ width: "100%", backgroundColor: "white", marginLeft: 50 }}>
                <View style={[styles.button, { marginLeft: 90, flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
                  <Image
                    style={tw`  h-4 w-4`}
                    source={require("../../assets/Icons/logout.png")}
                  />
                  <Text style={tw` pl-2 text-white font-bold `}>LOG OUT</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileInfo
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    width: 120,
    height: 50,
    marginRight: 10,
    opacity: 0.8,
    marginTop: 25,

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    marginRight: 10,
    marginTop: 20,
  },
  separatorOffset: {
    flex: 2,
    backgroundColor: "transparent",
  },
  separator: {
    borderColor: "#EDEDED",
    borderWidth: 0.8,
    flex: 1000000,
    width: "auto",
    flexDirection: "row",
  },
});