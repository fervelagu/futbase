import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FanScreen from './src/screens/FanScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
const Homebar = createBottomTabNavigator();

function Fan() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Fan" component={FanScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Homebar.Navigator initialRouteName="Home">
          <Homebar.Screen name="Fan">
            {() => Fan()}
          </Homebar.Screen>
          <Homebar.Screen name="Home" component={HomeScreen} />
        </Homebar.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
