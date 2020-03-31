import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { COLORS, IMGS } from '../styles';

export default function Wrapper({ children }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={IMGS.SPLASH} style={styles.bg}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        backgroundColor: COLORS.TEAM_PRIMARY
    },
    bg: {
        width: "100%",
        height: "100%"
    }
});