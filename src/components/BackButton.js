import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../styles";
import { Icon } from "native-base";

export const BackButton = ({ title, notWrapped }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight
                style={[styles.touch, notWrapped && { marginTop: 20 }]}
                onPress={() => navigation.goBack()}
                underlayColor={"transparent"}>
                <Icon name="md-arrow-back" style={styles.img} />
            </TouchableHighlight>
            {title && <Text style={styles.titleLabel}>{title}</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    touch: {
        padding: 6,
        height: 44,
        width: 44,
        borderRadius: 8,
        backgroundColor: COLORS.BLACK_BLUR
    },
    img: {
        fontSize: 30,
        alignSelf: "center",
        color: COLORS.WHITE
    },
    titleLabel: {
        color: COLORS.WHITE,
        fontSize: 24,
        paddingHorizontal: 12
    }
})
