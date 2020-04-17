import React from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, Text } from 'react-native';
import { COLORS } from '../styles';
import { BackButton } from '../components/BackButton';

export default class DetailScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: this.props.route.params.post
        };
    }

    render() {
        const { img, title, description } = this.state.post;
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode="cover"
                    source={{ uri: img }}
                    style={styles.bg}>
                    <BackButton />
                </ImageBackground>
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
        padding: 15,
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