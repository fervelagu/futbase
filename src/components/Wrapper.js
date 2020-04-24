import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, IMGS } from '../styles';

export const Wrapper = ({ children, color }) => {
    return (
        <SafeAreaView style={styles.container}>
            {!color ?
                <ImageBackground source={IMGS.SPLASH} style={styles.bg}>
                    {children}
                </ImageBackground>
                :
                <View style={[styles.bg, styles.color]}>
                    {children}
                </View>
            }
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
    },
    color: {
        backgroundColor: COLORS.TEAM_PRIMARY
    }
});