import * as React from 'react'
import { StyleSheet , Button } from 'react-native'
import {Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';

const FirstVue = ({
}: RootTabScreenProps<"FirstVueProps">) => {
    const navigation = useNavigation()
    return (
        <View>       
            <Button onPress={() => navigation.navigate("signUp")} title="signUp" />
            <Button onPress={() => navigation.navigate("login")} title="logIn" />           
        </View>
    )
}

export default FirstVue

const styles = StyleSheet.create({})
