import React from 'react';
import { StyleSheet } from 'react-native';
import { Wrapper } from '../components/Wrapper';
import { HeaderMatch } from '../components/HeaderMatch';
import TabsNavigator from '../navigation/HomeTabsNavigator';

const defaultMatch = {
    tournament: "Liga MX",
    stadium: "Estadio Azteca",
    localAsset: "pumas",
    local_url: null,
    localTeam: "Pumas",
    score: "0 - 0",
    visitorAsset: "america",
    visitor_url: null,
    visitTeam: "América",
    date: "Sábado 25, ABRIL"
};

export default HomeScreen = () => (
    <Wrapper>
        <HeaderMatch match={defaultMatch} />
        <TabsNavigator />
    </Wrapper>
);

const styles = StyleSheet.create({

});