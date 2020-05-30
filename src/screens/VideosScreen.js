import React from 'react';
import { FlatList } from 'react-native';
import { Subscribe } from 'unstated';
import { Video } from '../components/Video';
import videosContainer from '../containers/video.container';

export default class VideosScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skip: 0,
            limit: 5
        };
    }

    async componentDidMount() {
        await videosContainer.getTotalVideos();
        this.getVideos({
            skip: 0,
            limit: this.state.limit
        });
    }

    async getVideos(args) {
        await videosContainer.getVideos({
            skip: args.skip,
            limit: args.limit,
            accumulate: args.accumulate != undefined ? args.accumulate : true
        });
    }

    _onRefresh() {
        this.getVideos({
            skip: 0,
            limit: this.state.limit,
            accumulate: false
        });
    }

    _moreVideos() {
        let { skip, limit } = this.state;
        skip += limit;
        if (skip < videosContainer.state.total) {
            this.getVideos({
                skip: skip,
                limit: limit
            });
        }
    }

    _keyExtractor = (index) => index.toString();

    _renderItem(video, index) {
        return (
            <Video key={index} video={video.url} />
        )
    }

    renderView(container) {
        const { videos, refreshing } = container.state;
        return (
            <FlatList
                data={videos}
                onRefresh={() => this._onRefresh()}
                keyExtractor={this._keyExtractor}
                refreshing={refreshing}
                renderItem={({ item, index }) => this._renderItem(item, index)}
                onEndReached={() => this._moreVideos()}
                onEndReachedThreshold={0.7}
            />
        )
    }

    render = () => (
        <Subscribe to={[videosContainer]}>
            {() => this.renderView(videosContainer)}
        </Subscribe>
    )
}
