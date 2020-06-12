import React from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, Text } from 'react-native';
import { Wrapper } from '../components/Wrapper';
import { COLORS } from '../styles';
import { Icon } from 'native-base';
import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons';
import { i18n } from '../utils/i18n';

export default class FanScreen extends React.Component {
    render() {
        return (
            <Wrapper container>
                <View style={styles.header}>
                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <Icon name={"trophy"} style={styles.menuIcon} />
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            {i18n.t("Fan.ld")}
                        </Text>
                    </View>

                    <View style={styles.headerOption}>
                        <View style={styles.menuIconButton}>
                            <Icon name="md-person" style={styles.menuIcon} />
                        </View>
                        <View style={styles.userProfileInfo}>
                            <Text style={styles.userProfileLabel}>
                                username
                            </Text>
                            <TouchableHighlight
                                underlayColor={"transparent"}>
                                <Text style={styles.userProfileValue}>0</Text>
                            </TouchableHighlight>
                            <View style={{ flexDirection: "row", paddingVertical: 6 }}>
                                <Text style={styles.userProfileDescription}>{i18n.t("Fan.points")}</Text>
                                <Icon name={"refresh"} style={styles.refresh} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <Icon name={"md-person"} style={styles.menuIcon} />
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            {i18n.t("Fan.profile")}
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Checkin')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"map-marker"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Fan.checkin")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Fan.checkinMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('QR')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"qrcode-scan"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Fan.qr")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Fan.qrMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Surveys')}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"playlist-edit"} style={styles.icon} />
                                <Text style={styles.itemTitle}>{i18n.t("Fan.survey")}</Text>
                                <Text style={styles.itemDesc}>{i18n.t("Fan.surveyMsg")}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 200
    },
    headerOption: {
        alignItems: "center",
        width: Dimensions.get("screen").width / 3,
        borderRadius: 25,
    },
    menuIconButton: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 25,
        alignItems: "center",
        height: 50,
        marginTop: 20,
        width: 50
    },
    menuIcon: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 25,
        paddingTop: 12
    },
    menuLabel: {
        color: COLORS.WHITE,
        fontSize: 15,
        paddingVertical: 3
    },
    userProfileInfo: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    userProfileLabel: {
        color: COLORS.WHITE,
        fontSize: 18,
        textAlign: "center"
    },
    userProfileValue: {
        color: COLORS.WHITE,
        fontSize: 26,
        fontWeight: "bold"
    },
    refresh: {
        color: COLORS.WHITE,
        paddingHorizontal: 12,
        fontSize: 15
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