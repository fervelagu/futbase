import React from "react";
import { TouchableHighlight, Image, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../styles";
import { Icon } from "native-base";

export const BackButton = ({ title, icon }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.touch}
                onPress={() => navigation.goBack()}
                underlayColor={"transparent"}>
                <Icon name="md-arrow-back" style={styles.img} />
            </TouchableHighlight>
            <View style={styles.titleContainer}>
                {icon && (
                    <View>
                        <Image source={icon} style={styles.icon} />
                    </View>
                )}
                {title && (
                    <View>
                        <Text style={styles.titleLabel}>{title}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 42,
        paddingLeft: 15
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
    titleContainer: {
        flexDirection: "row"
    },
    icon: {
        margin: 4,
        height: 30,
        width: 30
    },
    titleLabel: {
        color: COLORS.WHITE,
        fontSize: 24,
        paddingVertical: 8
    }
})
