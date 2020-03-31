import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../styles";
import { getTeamLogo } from '../styles/images';

export const HeaderMatch = ({ match }) => {
    const {
        tournament,
        stadium,
        localAsset,
        local_url,
        localTeam,
        score,
        visitorAsset,
        visitor_url,
        visitTeam,
        date
    } = match;

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.headerTitleLabel}>{tournament}</Text>
                <Text style={styles.headerSubTitleLabel}>{stadium}</Text>
            </View>
            <View style={styles.matchContainer}>
                <View style={styles.matchOption}>
                    <Image
                        source={local_url ? { uri: local_url } : getTeamLogo(localAsset)}
                        style={styles.teamIcon}
                    />
                    <Text style={styles.headerTeamLabel} numberOfLines={1}>
                        {localTeam}
                    </Text>
                </View>
                <View style={styles.matchOption}>
                    <Text style={styles.scoreLabel}>{score}</Text>
                </View>
                <View style={styles.matchOption}>
                    <Image
                        source={visitor_url ? { uri: visitor_url } : getTeamLogo(visitorAsset)}
                        style={styles.teamIcon}
                    />
                    <Text style={styles.headerTeamLabel} numberOfLines={1}>
                        {visitTeam}
                    </Text>
                </View>
            </View>
            <View style={styles.center}>
                <Text style={styles.headerSubTitleLabel}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: COLORS.BLACK_BLUR,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 8,
        flexDirection: "column"
    },
    center: {
        alignItems: "center"
    },
    headerTitleLabel: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: 14
    },
    headerSubTitleLabel: {
        alignItems: "center",
        color: COLORS.WHITE,
        fontSize: 12
    },
    matchContainer: {
        flexDirection: "row",
        paddingVertical: 8
    },
    matchOption: {
        alignItems: "center",
        justifyContent: "center",
        width: (Dimensions.get("screen").width - 40) / 3
    },
    teamIcon: {
        marginTop: 12,
        alignSelf: "center",
        height: 46,
        width: 46
    },
    headerTeamLabel: {
        color: COLORS.WHITE,
        fontSize: 14,
        paddingTop: 5
    },
    scoreLabel: {
        color: COLORS.WHITE,
        fontSize: 28,
        fontWeight: "bold",
        paddingTop: 7
    }
});
