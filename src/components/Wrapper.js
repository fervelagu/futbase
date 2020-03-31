import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, IMGS } from '../styles';

export default function Wrapper({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={IMGS.SPLASH} style={styles.bg}>
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.TEAM_PRIMARY
    },
    bg: {
        width: "100%",
        height: "100%"
    }
});