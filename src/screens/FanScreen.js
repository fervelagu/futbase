import React from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, Image, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Wrapper from '../components/Wrapper';
import { COLORS, IMGS } from '../styles';

export default class FanScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <View style={styles.header}>
                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <View style={styles.menuIconContainer}>
                                <Image
                                    source={IMGS.BALL_ICON}
                                    style={styles.menuIcon}
                                />
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            Leaderboard
						</Text>
                    </View>

                    <View style={styles.headerOption}>
                        <View style={styles.headerProfileImageContainer}>
                            {/* user img validation */}
                            <Image
                                source={IMGS.BALL_ICON}
                                style={styles.profileImg}
                            />
                        </View>

                        <View style={styles.userProfileInfo}>
                            <Text style={styles.userProfileLabel}>
                                username
                            </Text>
                            <Text style={styles.userProfileRangeLabel}>
                                #teamHashtag
                            </Text>
                            <TouchableHighlight
                                underlayColor={"transparent"}>
                                <View style={styles.balanceView}>
                                    <Text style={styles.userProfileValue}>
                                        0
                                            </Text>
                                </View>
                            </TouchableHighlight>

                            <View style={{ flexDirection: "row", paddingVertical: 6 }}>
                                <Text style={styles.userProfileDescription}>team COIN</Text>
                                <Image source={IMGS.BALL_ICON} style={styles.refresh} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <View style={styles.menuIconContainer}>
                                <Image
                                    source={IMGS.BALL_ICON}
                                    style={styles.menuIcon}
                                />
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            PROFILE
						</Text>
                    </View>

                </View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}>
                        <View>
                            <View style={styles.fanOptionIcon}>
                                <Image
                                    source={IMGS.BALL_ICON}
                                    style={styles.icon}
                                />
                            </View>
                            <View style={styles.fanOptionDescriptionContainer}>
                                <Text style={styles.fanOptionDescriptionTitle}>
                                    TRIVIAS
                                </Text>
                                <Text style={styles.fanOptionDescriptionDescription}
                                    numberOfLines={1}>
                                    Responde las trivias
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerOption: {
        alignItems: "center",
        width: Dimensions.get("screen").width / 3,
        borderRadius: 25,
    },
    menuIconButton: {
        alignItems: "center",
        height: 50,
        marginTop: 20,
        width: 50
    },
    menuIconContainer: {
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderRadius: 25,
        height: 50,
        paddingTop: 5,
        width: 50
    },
    headerProfileImageContainer: {
        alignItems: "center",
        height: 80,
        width: 80
    },
    menuIcon: {
        marginTop: 8,
        height: 23,
        width: 23
    },
    menuLabel: {
        color: COLORS.WHITE,
        fontSize: 15,
        paddingVertical: 3
    },
    profileImg: {
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.TEAM_SECONDARY,
        borderWidth: 4,
        borderRadius: 50,
        height: 100,
        width: 100
    },
    userProfileInfo: {
        marginTop: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    userProfileLabel: {
        color: COLORS.WHITE,
        fontSize: 18,
        textAlign: "center"
    },
    userProfileRangeLabel: {
        color: COLORS.GRAY,
        fontSize: 13,
        textAlign: "center"
    },
    headerRankOption: {
        alignItems: "center",
        width: (Dimensions.get("screen").width - 60) / 3
    },
    userProfileValue: {
        color: COLORS.WHITE,
        fontSize: 26,
        fontWeight: "bold"
    },
    balanceView: {
        flexDirection: "row",
    },
    refresh: {
        alignSelf: "flex-end",
        width: 15,
        height: 15
    },
    userProfileDescription: {
        color: COLORS.WHITE,
        fontSize: 11
    },
    container: {
        flex: 1,
        flexWrap: "nowrap",
        padding: 12,
        backgroundColor: COLORS.WHITE
    },
    row: {
        flexDirection: "row"
    },
    rowItem: {
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.TEAM_PRIMARY,
        borderWidth: 1,
        borderRadius: 10,
        height: 130,
        marginLeft: 10,
        marginTop: 10,
        width: (Dimensions.get("screen").width - 50) / 2
    },
    fanOptionIcon: {
        alignItems: "center",
        paddingTop: 15
    },
    iconStadium: {
        height: 45,
        width: 50
    },
    icon: {
        height: 50,
        width: 50
    },
    fanOptionDescriptionContainer: {
        alignItems: "center"
    },
    fanOptionDescriptionTitle: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 18,
        paddingVertical: 1,
    },
    fanOptionDescriptionDescription: {
        color: COLORS.TEAM_PRIMARY,
        paddingVertical: 3,
        fontSize: 11,
    },
    nextLogo: {
        height: 29,
        position: "absolute",
        right: 8,
        top: 15,
        width: 21
    },
    plecaContainer: {
        height: 50,
        width: 225,
        position: "absolute",
        top: 0,
        right: 0
    },
    brandImageContainer: {
        height: 30,
        width: 100,
        marginLeft: 100,
        marginTop: 8
    },
    brandImage: {
        height: "100%",
        width: "100%"
    },

    locationsContainer: {
        alignItems: "center",
        width: "100%"
    },
    buttonContainer: {
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderRadius: 25,
        borderColor: COLORS.TEAM_SECONDARY,
        borderWidth: 1,
        height: "70%",
        marginTop: "40%",
        position: "relative",
        width: widthPercentageToDP("85%")
    },
    buttonImage: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: heightPercentageToDP("12%"),
        width: "90%",
        marginBottom: 20,
        marginTop: "3%"
    },
    buttonTitle: {
        fontSize: 22,
        color: COLORS.BLUE_AGUILA,
    },
    buttonTitleLabel: {
        textAlign: "center",
        fontSize: 24,
        color: COLORS.TEAM_PRIMARY,
    },
    buttonDescription: {
        color: COLORS.BLUE,
        fontSize: 18,
        paddingTop: 10,
        textAlign: "center"
    },
    buttonContainerBottom: {
        alignItems: "center",
        backgroundColor: COLORS.TEAM_PRIMARY,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        bottom: 0,
        paddingVertical: 15,
        position: "absolute",
        width: "100%"
    },
    buttonContainerBottomLabel: {
        fontSize: 18,
        color: COLORS.TEAM_SECONDARY,
    }
});