import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import FanNavigator from './src/navigation/FanNavigator';
import MatchesScreen from './src/screens/MatchesScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import TeamScreen from './src/screens/TeamScreen';
import { COLORS } from './src/styles';
import { Icon } from "native-base";

const Homebar = createBottomTabNavigator();

const TabBarIcon = ({ name, focused }) => (
  <Icon name={name}
    style={{
      color: focused ? COLORS.TEAM_SECONDARY : COLORS.TEAM_PRIMARY
    }}
  />
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Homebar.Navigator
          initialRouteName="Fan"
          tabBarOptions={{
            activeTintColor: COLORS.TEAM_SECONDARY,
            inactiveTintColor: COLORS.TEAM_PRIMARY
          }}
        >
          <Homebar.Screen name="Fan" component={FanNavigator}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="md-person" focused={focused} />
            }}
          />
          <Homebar.Screen name="Matches" component={MatchesScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="md-football" focused={focused} />
            }}
          />
          <Homebar.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="md-home" focused={focused} />
            }}
          />
          <Homebar.Screen name="Rewards" component={RewardsScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="md-trophy" focused={focused} />
            }}
          />
          <Homebar.Screen name="Team" component={TeamScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon name="md-flag" focused={focused} />
            }}
          />
        </Homebar.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
