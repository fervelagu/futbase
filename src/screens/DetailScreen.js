import React from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, Text } from 'react-native';
import { COLORS } from '../styles';
import { BackButton } from '../components/BackButton';
import { Wrapper } from '../components/Wrapper';

export default class DetailScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: this.props.route.params.post
        };
    }

    render() {
        const { asset, title, description } = this.state.post;
        return (
            <View style={styles.container}>
                <Wrapper asset={asset}>
                    <BackButton dark />
                </Wrapper>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleLabel}>
                            {title}
                        </Text>
                        <Text style={styles.descriptionLabel}>
                            {description}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 200,
    },
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    subContainer: {
        paddingHorizontal: 15,
        paddingBottom: 45,
        justifyContent: "flex-start"
    },
    titleLabel: {
        color: COLORS.TEAM_PRIMARY,
        fontSize: 22,
        fontWeight: "bold",
        paddingVertical: 10
    },
    descriptionLabel: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 16
    }
})