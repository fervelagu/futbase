import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FanScreen from '../screens/FanScreen';
import CheckinScreen from '../screens/CheckinScreen';
import QrScreen from '../screens/QrScreen';
import SurveysScreen from '../screens/SurveysScreen';

const Fan = createStackNavigator();

export default function FanNavigator() {
    return (
        <Fan.Navigator headerMode="none" initialRouteName="Fan">
            <Fan.Screen name="Fan" component={FanScreen} />
            <Fan.Screen name="Checkin" component={CheckinScreen} />
            <Fan.Screen name="QR" component={QrScreen} />
            <Fan.Screen name="Surveys" component={SurveysScreen} />
        </Fan.Navigator>
    );
}