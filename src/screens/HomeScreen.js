import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Wrapper } from '../components/Wrapper';
import { Loading } from '../components/Loading';
import { HeaderMatch } from '../components/HeaderMatch';
import PostsScreen from './PostsScreen';
import VideosScreen from './VideosScreen';
import { COLORS } from '../styles';
import StatisticsScreen from './StatisticsScreen';
import CalendarScreen from './CalendarScreen';

const Hometabs = createMaterialTopTabNavigator();

function HomeTab({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabStyle}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={styles.tabContainer}>
                        <Text style={isFocused ? styles.active : styles.inactive}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default function HomeScreen() {
    const defaultMatch = {
        tournament: "Liga MX",
        stadium: "Estadio Azteca",
        localAsset: "pumas",
        local_url: null,
        localTeam: "Pumas",
        score: "0 - 0",
        visitorAsset: "america",
        visitor_url: null,
        visitTeam: "América",
        date: "Sábado 25, ABRIL"
    }
    return (
        <Wrapper>
            <HeaderMatch match={defaultMatch} />
            <Hometabs.Navigator tabBar={props => <HomeTab {...props} />}>
                <Hometabs.Screen name="Posts" component={PostsScreen} />
                <Hometabs.Screen name="Videos" component={VideosScreen} />
                <Hometabs.Screen name="Statistics" component={StatisticsScreen} />
                <Hometabs.Screen name="Calendar" component={CalendarScreen} />
            </Hometabs.Navigator>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: COLORS.TEAM_PRIMARY,
        flexDirection: 'row',
        padding: 12
    },
    tabContainer: {
        width: "25%",
        alignItems: "center"
    },
    active: {
        color: COLORS.TEAM_SECONDARY,
        fontWeight: "bold"
    },
    inactive: {
        color: COLORS.WHITE_BLUR,
        fontWeight: "bold"
    }
});