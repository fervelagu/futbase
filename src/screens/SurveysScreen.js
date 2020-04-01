import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../styles';
import { Wrapper } from '../components/Wrapper';

export default class SurveysScreen extends React.Component {
    render() {
        return (
            <Wrapper color >
                <Text>Surveys.js</Text>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        backgroundColor: COLORS.TEAM_PRIMARY
    },
    bg: {
        width: "100%",
        height: "100%"
    },
    color: {
        backgroundColor: COLORS.TEAM_PRIMARY
    }
});