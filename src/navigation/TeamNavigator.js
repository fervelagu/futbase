import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from '../screens/TeamScreen';
import HistoryScreen from '../screens/HistoryScreen';
import WallpapersScreen from '../screens/WallpapersScreen';
import PlayersScreen from '../screens/PlayersScreen';
import StadiumScreen from '../screens/StadiumScreen';
import AnthemScreen from '../screens/AnthemScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

const Team = createStackNavigator();

export default function TeamNavigator() {
    return (
        <Team.Navigator headerMode="none" initialRouteName="Team">
            <Team.Screen name="Team" component={TeamScreen} />
            <Team.Screen name="History" component={HistoryScreen} />
            <Team.Screen name="Wallpapers" component={WallpapersScreen} />
            <Team.Screen name="Players" component={PlayersScreen} />
            <Team.Screen name="Stadium" component={StadiumScreen} />
            <Team.Screen name="Anthem" component={AnthemScreen} />
            <Team.Screen name="ContactUs" component={ContactUsScreen} />
        </Team.Navigator>
    );
}