import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../styles';

export const Wrapper = ({ children, asset, container }) => {
    const Container = container ? SafeAreaView : View;
    return (
        <>
            {asset ?
                <ImageBackground source={{ uri: asset }} resizeMode="cover" style={styles.assetBg}>
                    {children}
                </ImageBackground>
                :
                <Container style={styles.bg}>
                    {children}
                </Container>
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
        height: "100%",
        backgroundColor: COLORS.TEAM_PRIMARY
    }
});