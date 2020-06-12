import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { BackButton } from '../components/BackButton';
import { i18n } from '../utils/i18n';
import { Video } from '../components/Video';
import { TEAM_HASHTAG, ANTHEM_VIDEO } from '../constants/TeamConfig';

export default class AnthemScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <BackButton title={i18n.t("Team.anthemScreen.header")} />
                <Video
                    title={TEAM_HASHTAG}
                    video={ANTHEM_VIDEO}
                />
            </Wrapper>
        )
    }
}
