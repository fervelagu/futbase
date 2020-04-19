import React from 'react';
import { StyleSheet } from 'react-native';
import { Wrapper } from '../components/Wrapper';
import { HeaderMatch } from '../components/HeaderMatch';
import TabsNavigator from '../navigation/HomeTabsNavigator';

const defaultMatch = {
    tournament: "LIGA MX",
    stadium: "Azteca Stadium",
    localAsset: "pumas",
    local_url: null,
    localTeam: "Pumas",
    score: "0 - 0",
    visitorAsset: "america",
    visitor_url: null,
    visitTeam: "América",
    date: "Saturday 25, APRIL"
};

export default HomeScreen = () => (
    <Wrapper>
        <HeaderMatch match={defaultMatch} />
        <TabsNavigator />
    </Wrapper>
);

const styles = StyleSheet.create({

});