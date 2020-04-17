import React from 'react';
import { FlatList } from 'react-native';
import { Video } from '../components/Video';
import { DEFAULT_VIDEO } from "../constants/TeamConfig"

export default class VideosScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [
                {
                    url: DEFAULT_VIDEO,
                }
            ],
            refreshing: false,
            total: 0,
            skip: 0,
            limit: 5
        };
    }

    _onRefresh() {
        console.log("refresh...")
    }

    _moreVideos() {
        console.log("more videos...");
    }

    _keyExtractor = (index) => index.toString();

    _renderItem(video, index) {
        return (
            <Video key={index} video={video.url} />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.videos}
                onRefresh={() => this._onRefresh()}
                keyExtractor={this._keyExtractor}
                refreshing={this.state.refreshing}
                renderItem={({ item, index }) => this._renderItem(item, index)}
                onEndReached={() => this._moreVideos()}
                onEndReachedThreshold={0.7}
            />
        )
    }
}
