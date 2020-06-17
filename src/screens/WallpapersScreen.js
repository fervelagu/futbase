import React from 'react';
import { NoData } from "../components/NoData";
import { Wrapper } from '../components/Wrapper';
import { BackButton } from '../components/BackButton';
import { i18n } from '../utils/i18n';

export default class StatisticsScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <BackButton title={i18n.t("Team.wallpapersScreen.header")} />
                <NoData message={i18n.t("Team.wallpapersScreen.desc")} />
            </Wrapper>
        )
    }
}
