import React from "react";
import { TouchableHighlight, View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import { COLORS, IMGS } from "../styles";

export const Post = ({ data, index, onPress, onLike, onShare }) => {
    const { title, img, likes } = data;
    return (
        <TouchableHighlight
            key={index}
            onPress={() => onPress()}
            underlayColor={"transparent"}
            style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={{ uri: img }}
                style={styles.bg}>
                <View style={styles.desc}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => onLike()}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{likes}</Text>
                                <Image
                                    source={IMGS.LIKE}
                                    style={styles.likeImg}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => onShare()}>
                            <View style={styles.row}>
                                <Text style={styles.title}>Compartir</Text>
                                <Image
                                    source={IMGS.SHARE}
                                    style={styles.shareImg}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        position: "relative",
        width: "100%",
        height: 215
    },
    bg: {
        height: "100%",
        width: "100%"
    },
    desc: {
        bottom: 0,
        position: "absolute",
        width: "100%",
        padding: 12,
        backgroundColor: COLORS.BLACK_BLUR,
        alignItems: "center"
    },
    titleContainer: {
        width: "100%"
    },
    title: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: 14,
        paddingVertical: 2,
        paddingHorizontal: 6
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
    },
    likeImg: {
        width: 20,
        height: 20
    },
    shareImg: {
        width: 30,
        height: 20
    },
    liked: {
        color: COLORS.BLUE_HIGHT
    }
});