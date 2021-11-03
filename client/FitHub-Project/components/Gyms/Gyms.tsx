import * as React from 'react';
import { StyleSheet } from 'react-native';
import Map from "./Map"
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function Gyms({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
     <Map></Map>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});