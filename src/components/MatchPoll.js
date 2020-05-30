import React from "react";
import { View, Text, Image, TouchableHighlight, Picker, Platform, StyleSheet, Dimensions } from "react-native";
import { IMGS, COLORS } from "../styles";

export default class MatchPoll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            isSelectShowing: false,
            isPollAnswered: undefined,
            typeSelect: "localTeam",
            selectDefaultValue: 0,
            selectOptions: [
                { label: "0", value: "0" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" }
            ],
            matchPoll: undefined,
            localTeamActive: false,
            visitorTeamActive: false,
            tieActive: false,
            winnerName: undefined,
            localTeamScoreLabel: 0,
            visitorTeamScoreLabel: 0,
            localTeamPercentage: 0,
            visitorTeamPercentage: 0,
            matchPercentage: 0
        };
    }

    renderIfVoted = (localTeamPercentage, matchPercentage, visitorTeamPercentage, winner) => {
        const _localTeamPercentage = localTeamPercentage && localTeamPercentage.toFixed(0);
        const _matchPercentage = matchPercentage && matchPercentage.toFixed(0);
        const _visitorTeamPercentage = visitorTeamPercentage && visitorTeamPercentage.toFixed(0);
        return (
            <View style={styles.renderVotedView}>
                <Text style={styles.pollText2}>{strings("Matches.userpoll")}</Text>
                <View style={styles.percentages}>
                    <Text style={styles.teamPercentage}>{_localTeamPercentage}%</Text>
                    <Text style={styles.teamPercentage}>{_matchPercentage}%</Text>
                    <Text style={styles.teamPercentage}>{_visitorTeamPercentage}%</Text>
                </View>
                <View style={styles.winnerView}>
                    <Text style={styles.votedName}>{strings("Matches.score")}</Text>
                    <Text
                        style={[styles.votedName, styles.votedNameBold]}
                        numberOfLines={1}>
                        {winner}
                    </Text>
                </View>
            </View>
        );
    };

    renderSelects = (
        selectLocal,
        selectVisitant,
        sendVote,
        visitorTeamScoreLabel,
        localTeamScoreLabel,
        isAndroid,
        setLocalScoreAndroid,
        setVisitorScoreAndroid
    ) => {
        return (
            <View style={styles.markerContainer}>
                <View style={styles.markerSubContainer}>
                    {isAndroid ? (
                        <Picker
                            mode="dropdown"
                            selectedValue={localTeamScoreLabel}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(score, i) => setLocalScoreAndroid(score)}>
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                    ) : (
                            <TouchableHighlight
                                onPress={() => selectLocal()}
                                underlayColor={"transparent"}
                                style={styles.teamSelectLeftContainer}>
                                <View style={styles.teamSelectLeft}>
                                    <Text style={styles.selectText}>{localTeamScoreLabel}</Text>
                                    <Image source={IMGS.DROPDOWN} style={styles.dropdown} />
                                </View>
                            </TouchableHighlight>
                        )}

                    {isAndroid ? (
                        <Picker
                            mode="dropdown"
                            selectedValue={visitorTeamScoreLabel}
                            style={styles.pickerAndroid}
                            onValueChange={(score, i) => setVisitorScoreAndroid(score)}>
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                    ) : (
                            <TouchableHighlight
                                onPress={() => selectVisitant()}
                                underlayColor={"transparent"}
                                style={styles.teamSelectRightContainer}>
                                <View style={styles.teamSelectRight}>
                                    <Text style={styles.selectText}>{visitorTeamScoreLabel}</Text>
                                    <Image source={Images.DROPDOWN} style={styles.dropdown} />
                                </View>
                            </TouchableHighlight>
                        )}
                </View>
                <TouchableHighlight
                    onPress={() => sendVote()}
                    underlayColor={"transparent"}
                    style={styles.voteButton}>
                    <Text style={styles.voteText}>{strings("Matches.vote")}</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        const isAndroid = Platform.OS == "android";
        const {
            isPollAnswered,
            localAsset,
            localTeamScoreLabel,
            localTeamPercentage,
            visitorAsset,
            visitorTeamPercentage,
            visitorTeamScoreLabel,
            tieAsset,
            match,
            matchPercentage,
            selectLocal,
            selectVisitant,
            sendVote,
            winnerName,
            setLocalScoreAndroid,
            setVisitorScoreAndroid
        } = this.props;
        const { localTeam, visitTeam } = match || "";
        let _winner;
        if (winnerName && winnerName != "match") {
            _winner = winnerName == "localTeam" ? localTeam : visitTeam;
        } else if (!winnerName) {
            _winner = "-";
        } else _winner = "Empate";
        const winner = _winner && _winner.toUpperCase();
        return (
            <View style={styles.pollContainer}>
                <View style={styles.pollTextContainer}>
                    <Text style={styles.pollText1}>{strings("Matches.who")}</Text>
                    <Text style={styles.pollText2}>{strings("Matches.choose")}</Text>
                </View>

                <View style={styles.imagesContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={localAsset ? localAsset : getTeamLogo()} style={styles.teamImg} />
                        <Text style={styles.teamTitle} numberOfLines={1}>
                            {localTeam}
                        </Text>
                        {isPollAnswered && <Text style={styles.teamPercentage}>{localTeamScoreLabel}</Text>}
                    </View>

                    <View style={styles.iconContainer}>
                        <Image source={tieAsset} style={styles.tieImg} />
                        <Text style={styles.matchText}>{strings("Matches.match")}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Image source={visitorAsset ? visitorAsset : getTeamLogo()} style={styles.teamImg} />
                        <Text style={styles.teamTitle} numberOfLines={1}>
                            {visitTeam}
                        </Text>
                        {isPollAnswered && <Text style={styles.teamPercentage}>{visitorTeamScoreLabel}</Text>}
                    </View>
                </View>

                {isPollAnswered
                    ? this.renderIfVoted(localTeamPercentage, matchPercentage, visitorTeamPercentage, winner)
                    : this.renderSelects(
                        selectLocal,
                        selectVisitant,
                        sendVote,
                        visitorTeamScoreLabel,
                        localTeamScoreLabel,
                        isAndroid,
                        setLocalScoreAndroid,
                        setVisitorScoreAndroid
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pollContainer: {
        paddingBottom: 50,
        backgroundColor: COLORS.WHITE
    },
    pollTextContainer: {
        padding: 15
    },
    pollText1: {
        textAlign: "center",
        fontSize: 14
    },
    pollText2: {
        paddingTop: 10,
        textAlign: "center",
        color: COLORS.GRAY,
        fontSize: 13,
    },
    imagesContainer: {
        flexDirection: "row",
        height: "40%",
        justifyContent: "space-around"
    },
    iconContainer: {
        alignItems: "center"
    },
    teamImg: {
        width: 50,
        height: 50
    },
    tieImg: {
        width: 45,
        height: 45
    },
    matchText: {
        textAlign: "center",
        width: 100,
        height: "auto",
        color: COLORS.GRAY,
        fontSize: 14,
        paddingTop: 10
    },
    teamTitle: {
        textAlign: "center",
        width: 100,
        height: "auto",
        color: COLORS.GRAY,
        fontSize: 14,
        paddingTop: 5
    },
    teamPercentage: {
        paddingTop: 2,
        fontSize: 22,
        color: COLORS.BLACK
    },
    votedName: {
        fontSize: 12,
    },
    markerContainer: {
        width: "100%",
        height: "25%",
        alignSelf: "center"
    },
    markerSubContainer: {
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-evenly"
    },
    teamSelectLeftContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        width: Dimensions.get("window").width / 2
    },
    teamSelectLeft: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 0.5,
        borderColor: COLORS.GRAY,
        borderRadius: 5,
        width: 70,
        height: 35
    },
    selectText: {
        paddingHorizontal: 10,
        fontSize: 14
    },
    dropdown: {
        width: 20,
        height: 20
    },
    pickerAndroid: {
        height: 50,
        width: 100,
        borderWidth: 1,
        borderColor: "black"
    },
    voteButton: {
        padding: 10,
        margin: 20,
        backgroundColor: COLORS.TEAM_PRIMARY,
        justifyContent: "center",
        height: "60%",
        borderRadius: 5
    },
    voteText: {
        color: COLORS.WHITE,
        textAlign: "center"
    },
    teamSelectRightContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-end",
        width: Dimensions.get("window").width / 2
    },
    teamSelectRight: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 0.5,
        borderColor: COLORS.GRAY,
        borderRadius: 5,
        width: 70,
        height: 35
    },
    renderVotedView: {
        width: "100%",
        height: 100,
        paddingBottom: 10
    },
    percentages: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15
    },
    winnerView: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    votedNameBold: {
        bottom: 6,
        color: COLORS.TEAM_PRIMARY,
        fontWeight: "bold",
        fontSize: 18
    }
})