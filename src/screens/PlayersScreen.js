import React from 'react';
import { View, ScrollView } from "react-native";
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import { Subscribe } from 'unstated';
import { NoData } from "../components/NoData";
import { Wrapper } from '../components/Wrapper';
import { Loading } from '../components/Loading';
import { BackButton } from '../components/BackButton';
import { i18n } from '../utils/i18n';
import playerContainer from '../containers/player.container';
import Player from '../components/players/Player';
import { FIRST_TEAM, WOMEN_TEAM } from '../constants/team.constants';
import { COLORS } from '../styles';

export default class PlayersScreen extends React.Component {
    async componentDidMount() {
        await playerContainer.getPlayers();
    }

    render() {
        return (
            <Subscribe to={[playerContainer]}>
                {() => {
                    const { teams, loading } = playerContainer.state;
                    const showEmpty = !teams || !teams.length;

                    if (!!teams) {
                        var renderMain = [];
                        var renderWomen = [];

                        teams.forEach(team => {
                            if (team.name === FIRST_TEAM) {
                                team.scheme.map(scheme => {
                                    scheme.players.map(player => {
                                        renderMain.push(
                                            <Player
                                                item={player}
                                                navigate={this.props.navigation.navigate}
                                            />
                                        );
                                    });
                                });
                            } else if (team.name === WOMEN_TEAM) {
                                team.scheme.map(scheme => {
                                    scheme.players.map(player => {
                                        renderWomen.push(
                                            <Player
                                                item={player}
                                                navigate={this.props.navigation.navigate}
                                            />
                                        );
                                    });
                                });
                            }
                        });
                    }

                    return (
                        <Wrapper>
                            <BackButton title={i18n.t("Team.playersScreen.header")} />
                            {loading && <Loading />}
                            {showEmpty ? <NoData /> :
                                <ScrollableTabView
                                    tabBarUnderlineStyle={{ backgroundColor: COLORS.TEAM_SECONDARY }}
                                    tabBarActiveTextColor={COLORS.TEAM_SECONDARY}
                                    tabBarInactiveTextColor={COLORS.WHITE}>
                                    <View tabLabel={FIRST_TEAM}>
                                        <ScrollView>{renderMain}</ScrollView>
                                    </View>
                                    <View tabLabel={WOMEN_TEAM}>
                                        <ScrollView>{renderWomen}</ScrollView>
                                    </View>
                                </ScrollableTabView>
                            }
                        </Wrapper>
                    )
                }}
            </Subscribe>
        )
    }
}
