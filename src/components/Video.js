import React from "react";
import { TouchableHighlight, View, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { COLORS } from "../styles";

export const Video = ({ title, video, index }) => {
    return (
        <View>
            <View style={styles.container}>
                <WebView
                    style={styles.video}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: video }}
                />
            </View>
            {title && (
                <View style={styles.video}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 215
    },
    video: {
        width: "100%"
    },
    titleContainer: {
        backgroundColor: COLORS.WHITE,
        width: "100%"
    },
    title: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: 14,
        paddingVertical: 2,
        paddingHorizontal: 6
    }
});