import React from 'react';
import { StyleSheet } from 'react-native';
import { Subscribe } from 'unstated';
import { BackButton } from '../components/BackButton';
import { Wrapper } from '../components/Wrapper';
import { Loading } from '../components/Loading';
import { HeaderMatch } from '../components/HeaderMatch';
import matchContainer from '../containers/matches.container';

export default class MatchCalendarScreen extends React.Component {

    async componentDidMount() {
        const { matchId } = this.props.route.params;
        await matchContainer.getMatch(matchId);
    }

    renderView(mc) {
        const { calendarMatch } = mc.state;
        if (!calendarMatch) return <Loading />
        return (
            <Wrapper style={styles.container}>
                <BackButton />
                <HeaderMatch match={calendarMatch} />
            </Wrapper>
        )
    }

    render = () => (
        <Subscribe to={[matchContainer]}>
            {() => this.renderView(matchContainer)}
        </Subscribe>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    }
});