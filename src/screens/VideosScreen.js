import React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../components/Post';
import { IMGS } from '../styles';

export default class VideosScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [
                {
                    title: "notice title",
                    video: IMGS.NOTE_DEFAULT,
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
            <Post
                data={video}
                index={index}
                onPress={video.onPress}
                onLike={video.onLike}
                onShare={video.onShare}
            />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.posts}
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
