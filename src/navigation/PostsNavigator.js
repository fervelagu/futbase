import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../screens/PostsScreen';
import DetailScreen from '../screens/DetailScreen';

const Posts = createStackNavigator();

export default function PostsNavigator() {
    return (
        <Posts.Navigator headerMode="none" initialRouteName="Posts">
            <Posts.Screen name="Posts" component={PostsScreen} />
            <Posts.Screen name="Detail" component={DetailScreen} />
        </Posts.Navigator>
    );
}