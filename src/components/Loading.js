import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../styles";

export const Loading = ({ message = "Cargando..." }) => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.WHITE} />
        <Text style={styles.text}>{message}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "45%",
        height: "25%",
        position: "absolute",
        bottom: "40%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: COLORS.BLACK_BLUR,
    },
    text: {
        paddingVertical: 12,
        color: COLORS.WHITE
    }
})