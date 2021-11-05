import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD

import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from 'react';
=======
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
>>>>>>> 3a87e257c7f31f8e8e0a4671c07f6566ca1c6105
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
