import React from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, Text } from 'react-native';
import Wrapper from '../components/Wrapper';
import { COLORS } from '../styles';
import { Icon } from 'native-base';
import { MaterialCommunityIcons as MaterialIcon} from '@expo/vector-icons';

export default class FanScreen extends React.Component {
    render() {
        return (
            <Wrapper color>
                <View style={styles.header}>
                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <Icon name={"trophy"} style={styles.menuIcon} />
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            Leaderboard
						</Text>
                    </View>

                    <View style={styles.headerOption}>
                        <View style={styles.menuIconButton}>
                            <Icon name="person" style={styles.menuIcon} />
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
                                <Text style={styles.userProfileDescription}>team COIN</Text>
                                <Icon name={"refresh"} style={styles.refresh} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerOption}>
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={"transparent"}
                            style={styles.menuIconButton}>
                            <Icon name={"person"} style={styles.menuIcon} />
                        </TouchableHighlight>
                        <Text style={styles.menuLabel}>
                            Profile
						</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => this.props.navigation.navigate('Surveys')}>
                            <View style={styles.rowView}>
                                <Icon name={"trophy"} style={styles.icon} />
                                <Text style={styles.itemTitle}>TRIVIAS</Text>
                                <Text style={styles.itemDesc}>Responde las trivias</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.rowItem} underlayColor={"transparent"}
                            onPress={() => console.log()}>
                            <View style={styles.rowView}>
                                <MaterialIcon name={"qrcode-scan"} style={styles.icon} />
                                <Text style={styles.itemTitle}>QR</Text>
                                <Text style={styles.itemDesc}>Escanea QRS!</Text>
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
        alignItems: "center"
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
        flexDirection: "row",
        justifyContent: "space-around"
    },
    rowItem: {
        borderWidth: 1,
        borderRadius: 10,
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