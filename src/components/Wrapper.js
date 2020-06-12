import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, IMGS } from '../styles';

export const Wrapper = ({ children, asset }) => {
    return (
        <>
            {asset ?
                <ImageBackground source={{ uri: asset }} resizeMode="cover" style={styles.assetBg}>
                    {children}
                </ImageBackground>
                :
                <View style={[styles.bg, styles.color]}>
                    {children}
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.TEAM_PRIMARY
    },
    assetBg: {
        width: "100%",
        height: 300
    },
    bg: {
        width: "100%",
        height: "100%"
    },
    color: {
        backgroundColor: COLORS.TEAM_PRIMARY
    }
});