import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, IMGS } from "../styles";
import { i18n } from "../utils/i18n";

export const NoData = ({ message = i18n.t("Global.noData") }) => (
    <View style={styles.container}>
        <View style={{ alignItems: "center", paddingVertical: 12 }}>
            <Image source={IMGS.BALL_ICON} style={styles.icon} />
            <Text style={styles.text}>{message}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.TEAM_PRIMARY
    },
    icon: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        width: 35,
        height: 35
    },
    text: {
        fontSize: 18,
        paddingVertical: 12,
        color: COLORS.TEAM_SECONDARY,
    }
})