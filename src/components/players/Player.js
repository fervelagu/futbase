import React from "react";
import { TouchableHighlight, View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../styles";

const Player = ({ index, item, navigate }) => {
    const backgroundColorPanel =
        index % 2 == 0 ? COLORS.TEAM_SECONDARY : COLORS.TEAM_PRIMARY;
    const TextColor = index % 2 == 0 ? COLORS.TEAM_PRIMARY : COLORS.WHITE;
    const { photo, jersey, common_name } = item;
    return (
        <TouchableHighlight
            key={index}
            underlayColor={"transparent"}
        // onPress={() => navigate("PlayerProfile", { player: item })}
        >
            <View key={index} style={styles.container}>
                <View
                    style={[
                        styles.playerContainer,
                        { backgroundColor: backgroundColorPanel }
                    ]}>
                    <View style={styles.playerImageContainer}>
                        <Image source={{ uri: photo }} style={styles.playerPhoto} />
                    </View>
                    <View style={styles.playerNameContainer}>
                        <Text style={[styles.hashtag, { color: TextColor }]}>#</Text>
                        <Text style={[styles.playerNumberLabel, { color: TextColor }]}>
                            {jersey > 9 ? jersey : "0" + jersey}
                        </Text>
                        <Text
                            style={[styles.playerLastNameLabel, { color: TextColor }]}
                            numberOfLines={1}>
                            {common_name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default Player;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        width: Dimensions.get("window").width,
        alignItems: "center"
    },
    playerContainer: {
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30,
        position: "relative",
        width: Dimensions.get("window").width * 0.95,
        flexDirection: "row"
    },
    playerImageContainer: {
        height: 200,
        alignItems: "center",
        width: Dimensions.get("window").width / 2,
        zIndex: 1
    },
    playerImageBgContainer: {
        height: "100%",
        width: "100%"
    },
    playerPhoto: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    playerNameContainer: {
        width: "45%"
    },
    playerNumberLabel: {
        fontSize: 36,
        textAlign: "center",
        position: "absolute",
        right: 10,
        top: 20
    },
    hashtag: {
        fontSize: 30,
        textAlign: "center",
        position: "absolute",
        right: 50,
        top: 20
    },
    playerFirstNameLabel: {
        fontSize: 20,
        position: "absolute",
        left: 10,
        bottom: 40
    },
    playerLastNameLabel: {
        fontSize: 20,
        position: "absolute",
        left: 10,
        bottom: 20
    }
});
