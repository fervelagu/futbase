import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/Navigator";
import { Provider } from "unstated";

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" translucent animated />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
