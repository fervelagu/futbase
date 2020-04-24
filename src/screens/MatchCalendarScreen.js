import React from 'react';
import { StyleSheet } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Wrapper } from '../components/Wrapper';

export default class MatchCalendarScreen extends React.Component {
    render() {
        return (
            <Wrapper style={styles.container}>
                <BackButton />
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    }
});