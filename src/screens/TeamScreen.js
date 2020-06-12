import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, Text } from 'react-native';
import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons';
import { Wrapper } from '../components/Wrapper';
import { COLORS } from '../styles';
import { i18n } from '../utils/i18n';

export default class FanScreen extends React.Component {
    render() {
        return (
            <Wrapper container>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {i18n.t("Team.exclusive")}
                    </Text>
                    <TouchableHighlight
                        style={styles.historyButton}
                        underlayColor={"transparent"}
                        onPress={() => this.props.navigation.navigate('History')}>
                        <View style={styles.iconView}>
                            <Text style={styles.headerTeamTitleButton}>
                                {i18n.t("Team.history")}
                            </Text>
                            <MaterialIcon name="arrow-right" style={styles.historyButtonLogo} />
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Wallpapers')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"image-area"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Team.wallpapers")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Team.wallpapersMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Players')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"soccer"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Team.players")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Team.playersMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Stadium')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"soccer-field"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Team.stadium")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Team.stadiumMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Anthem')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"playlist-music"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Team.anthem")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Team.anthemMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('ContactUs')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"email-outline"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Team.contact")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Team.contactMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        height: 200
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 24
    },
    historyButton: {
        alignItems: "center",
        backgroundColor: COLORS.TEAM_SECONDARY,
        borderRadius: 10,
        padding: 8,
        marginTop: 20,
        width: Dimensions.get("screen").width - 80
    },
    iconView: {
        marginVertical: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    headerTeamTitleButton: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: 16
    },
    historyButtonLogo: {
        fontWeight: "bold",
        fontSize: 18,
        color: COLORS.WHITE,
        marginHorizontal: 12
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
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        borderColor: COLORS.TEAM_PRIMARY,
        height: (Dimensions.get("screen").height) / 6,
        width: (Dimensions.get("screen").width - 50) / 2
    },
    rowView: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 50
    },
    itemTitle: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 18,
        paddingVertical: 1,
    },
    itemDesc: {
        color: COLORS.TEAM_PRIMARY,
        paddingVertical: 3,
        fontSize: 11,
    }
});