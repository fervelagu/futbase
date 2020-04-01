import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { COLORS, IMGS } from '../styles';

export const Wrapper = ({ children, color }) => {
    return (
        <View style={styles.container}>
            {!color ?
                <ImageBackground source={IMGS.SPLASH} style={styles.bg}>
                    {children}
                </ImageBackground>
                :
                <View style={[styles.bg, styles.color]}>
                    {children}
                </View>
            }
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
    },
    color: {
        backgroundColor: COLORS.TEAM_PRIMARY
    }
});