import React from 'react';
import { View, FlatList } from 'react-native';
import { Post } from '../components/Post';
import { IMGS } from '../styles';

export default class PostsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    title: "notice title",
                    img: IMGS.NOTE_DEFAULT,
                    likes: 100,
                    onPress: () => console.log(),
                    onLike: () => console.log(),
                    onShare: () => console.log()
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

    _morePosts() {
        console.log("more posts...");
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem(post, index) {
        return (
            <Post
                data={post}
                onPress={post.onPress}
                onLike={post.onLike}
                onShare={post.onShare}
            />
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.posts}
                    onRefresh={() => this._onRefresh()}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.state.refreshing}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    onEndReached={() => this._morePosts()}
                    onEndReachedThreshold={0.7}
                />
            </View>
        )
    }
}
