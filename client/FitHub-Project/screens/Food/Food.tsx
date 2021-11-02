import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View,  TouchableOpacity, TextInput } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function FoodScren({ navigation }: RootTabScreenProps<'Food'>) {
  return (
  <View >
     <Text >
        Food
     </Text>
  </View>
)
  }
