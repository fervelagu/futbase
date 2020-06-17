import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Linking } from 'react-native';
import { Icon } from 'native-base';
import { Wrapper } from '../components/Wrapper';
import { BackButton } from '../components/BackButton';
import { COLORS } from '../styles';
import { TEAM_MAIL } from '../constants/TeamConfig';
import { i18n } from '../utils/i18n';

export default class ContactUsScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <BackButton title={i18n.t("Team.contactScreen.header")} />
                <View style={styles.container}>
                    <View style={styles.sub}>
                        <Icon name={"md-mail"} style={styles.icon} />
                        <Text style={styles.text}>{i18n.t("Team.contactScreen.desc")}</Text>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => Linking.openURL(TEAM_MAIL)}>
                            <Text style={[styles.text, styles.mail]}>fevelazq@gmail.com</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        justifyContent: "center",
    },
    sub: {
        alignItems: "center",
        alignSelf: "center"
    },
    text: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 24
    },
    mail: {
        fontStyle: "italic"
    },
    icon: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 80
    }
})
