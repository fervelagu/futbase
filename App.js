import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FanScreen from './src/screens/FanScreen';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import TeamScreen from './src/screens/TeamScreen';
import { COLORS } from './src/styles';
import { Icon } from "native-base";

const Homebar = createBottomTabNavigator();

const TabBarIcon = ({ name, focused }) => (
  <Icon name={name}
    style={{
      color: focused ? COLORS.TEAM_PRIMARY : COLORS.BLACK_BLUR
    }}
  />
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Homebar.Navigator initialRouteName="Fan">
          <Homebar.Screen name="Fan" component={FanScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="person" focused={focused} />
            }}
          />
          <Homebar.Screen name="Matches" component={MatchesScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="football" focused={focused} />
            }}
          />
          <Homebar.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />
            }}
          />
          <Homebar.Screen name="Rewards" component={RewardsScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="trophy" focused={focused} />
            }}
          />
          <Homebar.Screen name="Team" component={TeamScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="shirt" focused={focused} />
            }}
          />
        </Homebar.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
