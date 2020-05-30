import React from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';
import { BackButton } from '../components/BackButton';
import { COLORS, IMGS } from '../styles';
import { i18n } from '../utils/i18n';

export default class StadiumScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={IMGS.STADIUM}
                    style={styles.bg}>
                    <BackButton notWrapped />
                </ImageBackground>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <Text style={styles.header}>
                            {i18n.t("Team.stadiumScreen.header")}
                        </Text>
                        <Text style={styles.desc}>
                            {i18n.t("Team.stadiumScreen.desc")}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    bg: {
        width: "100%",
        height: 250,
    },
    subContainer: {
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom: 45,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.TEAM_PRIMARY
    },
    desc: {
        paddingTop: 12,
        fontSize: 14,
        color: COLORS.BLACK
    }
})
