import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { COLORS } from "../styles";
import MatchesScreen from "../screens/MatchesScreen";
import FanNavigator from "./FanNavigator";
import RewardsScreen from "../screens/RewardsScreen";
import TeamScreen from "../screens/TeamScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const App = createStackNavigator();
const AppNavigator = () => (
    <App.Navigator initialRouteName="App" headerMode="none">
        {/* //TODO: add Auth navigation */}
        <App.Screen name="App" component={BottomTabs} />
    </App.Navigator>
);

const HomeStack = createStackNavigator();
const HomeNavigator = () => (
    <HomeStack.Navigator initialRouteName="Home" headerMode="none">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
);

const TabBarIcon = ({ name, focused }) => (
    <Icon name={name}
        style={{
            color: focused ? COLORS.TEAM_SECONDARY : COLORS.TEAM_PRIMARY
        }}
    />
);

const BottomStack = createBottomTabNavigator();
const BottomTabs = () => (
    <BottomStack.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: COLORS.TEAM_SECONDARY,
            inactiveTintColor: COLORS.TEAM_PRIMARY
        }}>
        <BottomStack.Screen name="Matches" component={MatchesScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon name="md-person" focused={focused} />
            }} />
        <BottomStack.Screen name="Fan" component={FanNavigator}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon name="md-football" focused={focused} />
            }} />
        <BottomStack.Screen name="Home" component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon name="md-home" focused={focused} />
            }} />
        <BottomStack.Screen name="Rewards" component={RewardsScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon name="md-trophy" focused={focused} />
            }} />
        <BottomStack.Screen name="Team" component={TeamScreen}
            options={{
                tabBarIcon: ({ focused }) => <TabBarIcon name="md-flag" focused={focused} />
            }} />
    </BottomStack.Navigator>
);

export default AppNavigator;