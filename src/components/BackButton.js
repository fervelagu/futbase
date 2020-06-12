import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../styles";
import { Icon } from "native-base";

export const BackButton = ({ title, dark }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView paddingLeft={15} paddingBottom={12} style={styles.container}>
            <TouchableHighlight
                style={[styles.touch, dark && styles.dark]}
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
        flexDirection: "row",
        alignItems: "center"
    },
    touch: {
        justifyContent: "center",
        height: 44,
        width: 44
    },
    dark: {
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
