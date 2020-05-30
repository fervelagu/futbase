import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrapper } from '../components/Wrapper';
import { BackButton } from '../components/BackButton';
import { COLORS } from '../styles';
import { i18n } from '../utils/i18n';

export default class HistoryScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <BackButton title={i18n.t("Team.historyScreen.header")} icon={"text-subject"} />
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {i18n.t("Team.historyScreen.header")}
                    </Text>
                    <Text style={styles.desc}>
                        {i18n.t("Team.historyScreen.desc")}
                    </Text>
                </View>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.WHITE
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.TEAM_PRIMARY
    },
    desc: {
        paddingTop: 12,
        fontSize: 14,
        color: COLORS.BLACK
    }
})