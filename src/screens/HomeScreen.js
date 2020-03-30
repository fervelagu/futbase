import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../components/Wrapper';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <Text>HomeScreen.js</Text>
            </Wrapper>
        )
    }
}

const s = StyleSheet.create({
    container: {}
})