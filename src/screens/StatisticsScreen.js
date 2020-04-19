import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { TEST_TOURNAMENT } from "../constants/TeamConfig";

const TOURNAMENT = TEST_TOURNAMENT;

export default class StatisticsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>StatisticsScreen.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});