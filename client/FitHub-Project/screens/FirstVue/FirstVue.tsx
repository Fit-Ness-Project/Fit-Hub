import * as React from 'react'
import { StyleSheet, Button, ScrollView, ImageBackground } from 'react-native'
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    return (
       <View></View>
    )
}

export default FirstVue

const styles = StyleSheet.create({})
