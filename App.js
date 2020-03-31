import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FanScreen from './src/screens/FanScreen';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import TeamScreen from './src/screens/TeamScreen';

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
        <Homebar.Navigator initialRouteName="Fan">
          <Homebar.Screen name="Fan" component={FanScreen} />
          <Homebar.Screen name="Matches" component={MatchesScreen} />
          <Homebar.Screen name="Home" component={HomeScreen} />
          <Homebar.Screen name="Rewards" component={RewardsScreen} />
          <Homebar.Screen name="Team" component={TeamScreen} />
        </Homebar.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
