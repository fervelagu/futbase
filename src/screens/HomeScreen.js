import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wrapper from '../components/Wrapper';
import { Loading } from '../components/Loading';
import { HeaderMatch } from '../components/HeaderMatch';
import PostsScreen from './PostsScreen';
import { COLORS } from '../styles';

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
                        onPress={onPress}>
                        <Text style={isFocused ? styles.active : inactive}>{label}</Text>
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
            </Hometabs.Navigator>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabStyle: {
        flexDirection: 'row',
        padding: 12
    },
    active: {
        color: COLORS.WHITE,
        fontWeight: "bold"
    },
    inactive: {
        color: COLORS.BLACK_TRA,
        fontWeight: "bold"
    }
});