import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../styles';
import PostsScreen from '../screens/PostsScreen';
import VideosScreen from '../screens/VideosScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import { i18n } from '../utils/i18n';

const Tab = ({ state, descriptors, navigation }) => (
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
                    key={index}
                    onPress={onPress}
                    style={styles.tabContainer}>
                    <Text style={isFocused ? styles.active : styles.inactive}>{label}</Text>
                </TouchableOpacity>
            );
        })}
    </View>
);

const Tabs = createMaterialTopTabNavigator();
TabsNavigator = () => (
    <Tabs.Navigator sceneContainerStyle={styles.bg}
        tabBar={props => <Tab {...props} />}>
        <Tabs.Screen name={i18n.t("Global.posts")} component={PostsScreen} />
        <Tabs.Screen name={i18n.t("Global.videos")} component={VideosScreen} />
        <Tabs.Screen name={i18n.t("Global.statistic")} component={StatisticsScreen} />
        <Tabs.Screen name={i18n.t("Global.calendar")} component={CalendarScreen} />
    </Tabs.Navigator>
);

export default TabsNavigator;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "transparent"
    },
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