import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import FanScreen from './src/screens/FanScreen';

const Stack = createStackNavigator();
const Homebar = createBottomTabNavigator();

function Fan() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Fan" component={FanScreen} />
    </Stack.Navigator>
  )
}

function Home() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={HomeScreen} />
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
          <Homebar.Screen name="Home">
            {() => Home()}
          </Homebar.Screen>
        </Homebar.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
