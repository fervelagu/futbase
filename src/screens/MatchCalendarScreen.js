import React from 'react';
import { StyleSheet } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Wrapper } from '../components/Wrapper';
import { Loading } from '../components/Loading';
import { HeaderMatch } from '../components/HeaderMatch';
import { matches } from '../constants/matches';

export default class MatchCalendarScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const { matchId } = this.props.route.params;
        const [match] = matches.filter(match => match.id == matchId)
        this.setState({ calendarMatch: match })
    }

    render() {
        const { calendarMatch } = this.state;
        if (!calendarMatch) return <Loading />
        return (
            <Wrapper style={styles.container}>
                <BackButton />
                <HeaderMatch match={calendarMatch} />
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    }
});