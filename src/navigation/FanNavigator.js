import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FanScreen from '../screens/FanScreen';
import SurveysScreen from '../screens/SurveysScreen';

const Fan = createStackNavigator();

export default function FanNavigator() {
    return (
        <Fan.Navigator headerMode="none" initialRouteName="Fan">
            <Fan.Screen name="Fan" component={FanScreen} />
            <Fan.Screen name="Surveys" component={SurveysScreen} />
        </Fan.Navigator>
    );
}